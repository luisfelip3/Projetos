
import './App.css';

function App() {
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
            <input type="text" placeholder="Digite seu Cep" required />

            <button className="button">Checar Endereco</button>

            <div className="info_endereco">
              <input type="text" placeholder="Logradouro" required/>
              <input type="text" placeholder="Estado" required/>
              <input type="text" placeholder="Cidade" required/>
              <input type="text" placeholder="Bairro" required/>
            </div>

          </form>
        </main>
    </div>
  );
}

export default App;
