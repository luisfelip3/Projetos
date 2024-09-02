import './App.css';
import {useState} from 'react'

import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState([])

  async function handleSearch() {
    if(input === ''){
      alert("Preencha com seu cep")
      return;
    }

    try {
      const response =  await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    } catch {
      alert('ERRO AO BUSCAR')
      setInput('')
    }
  }

  return (
    <div className="App">
       <main>
          <input type='text' placeholder='Digite seu Cep' value={input} onChange={(e)=> setInput(e.target.value)}/>
          <button className='button' onSubmit={handleSearch}>Checar Endereco</button>

          <div className='info_endereco'>
            <span>CEP: {cep.cep}</span>
            <span>Rua: {cep.logradouro}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>Estado {cep.localidade} {cep.uf}</span>
          </div>
       </main>
    </div>
  );
}

export default App;
