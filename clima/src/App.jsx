import './App.css'
import { FaSearch } from "react-icons/fa";

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
      <div className='main'>
        <div className="title">
          <h1>{city}</h1>
        </div>
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
        {climaData && (
          <div className='descricao_clima'>
          <span>{Math.round(climaData.main?.temp)}°C</span>
          <span>
            <p className="descricao_Tempo">{climaData.weather?.[0]?.description}</p>
          <img src={`http://openweathermap.org/img/wn/${climaData.weather[0].icon}@2x.png`} alt={climaData.weather[0].description} className='descricao_icone'/>
          </span>
          <span>Umidade do ar {climaData.main?.humidity}%</span>  
        </div>  
        )}
      </div>
    </div>
    
  )
}

export default App
