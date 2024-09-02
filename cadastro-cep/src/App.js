import './App.css';
import {useState} from 'react'
import api from "./services/api"

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
          <h1 className="Titulo">Cadastre-se</h1>
          <form>
            <span>Nome: </span>
            <input type="text" placeholder="Digite seu nome" required/>

            <span>Cpf: </span>
            <input type="text" placeholder="Digite seu Cpf" required/>

            <span>Sexo: </span>
            <input type="text" placeholder="Digite seu Genero" required/>

            <span>CEP: </span>
            <input type="text" placeholder="Digite seu Cep" required value={input} onChange={(e) => setInput(e.target.value)}/>

            <button className="button" onSubmit={handleSearch}>Checar Endereco</button>

            <div className="info_endereco">
              <span>{cep.uf}</span>
            </div>

          </form>
        </main>
    </div>
  );
}

export default App;
