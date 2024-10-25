import './App.css'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import apiClima from '../api/api';
import React, {useState} from 'react';

function App() {

  const [city, setCity] = useState('');
  const [climaData, setClimaData] = useState(null);

  const handleSearch = async () => {
    setClimaData(null);

    try {
      const response = await apiClima.get('weather', {
        params: {
          q: city,
        },
      });
      setClimaData(response.data);
    }catch (err){
      window.alert("OCORREU UM ERRO NA BUSCA");
    }

  }

  return (
    <div className='App'>
      <div className='input'>
          <input type='text' id='input'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Digite o nome da cidade'
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
              handleSearch();
            }
          }}
          />
          <button onClick={handleSearch}  id='button'><FaSearch/></button>
        </div>
      <div className='main'>
        <div className="title">
          <h1>{city}<FaLocationDot /></h1>
        </div>
        
        {climaData && (
          <div className='descricao_clima'>
          <div className="temperatura">
            <span className='temperatura'>
            <h1>{Math.round(climaData.main?.temp)}°C</h1>
            <img src={`http://openweathermap.org/img/wn/${climaData.weather[0].icon}@2x.png`} alt={climaData.weather[0].description} className='descricao_icone'/>
            </span>
          </div>
          <div className="detalhes_tempo_container">
            
              <div className="informacoes_clima"><span>Umidade do ar {climaData.main?.humidity}%</span></div>
              <div className="informacoes_clima"><span>visibilidade {climaData.visibility}</span>m</div>
              <div className="informacoes_clima"><span>pressão do ar {climaData.main?.pressure}hPa</span></div>
              <div className="informacoes_clima"><span>vento {climaData.wind?.speed}km/h</span></div>
            
          </div>
          </div> 
        )}
      </div>
    </div>
    
  )
}

export default App
