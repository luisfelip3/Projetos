import './App.css'
import { FaSearch } from "react-icons/fa";

function App() {

  return (
    <div className='App'>
      <div className='main'>
        <div className='input'>
          <input type='text' placeholder='Digite o nome da cidade'></input>
          <button type="submit"><FaSearch/></button>

        </div>
        <div className='descricao_clima'>
          <span>Temperatura</span>
          <span>umidade</span>  
        </div>
      </div>
    </div>
  )
}

export default App
