
import './App.css';

function App() {
  return (
    <div className="App">
        <main>
          <h1 className="Titulo">Cadastre-se</h1>
          <form>
            <span>Nome: </span>
            <input type="text" placeholder="Digite seu nome" />

            <span>Cpf: </span>
            <input type="number" placeholder="Digite seu Cpf" />

            <span>Sexo: </span>
            <input type="text" placeholder="Digite seu Genero" />

            <span>CEP: </span>
            <input type="number" placeholder="Digite seu Cep" />

            <div className="info_endereco">
              <input type="text" placeholder="Logradouro"/>
              <input type="text" placeholder="Estado"/>
              <input type="text" placeholder="Cidade"/>
              <input type="text" placeholder="Bairro"/>
            </div>

          </form>
        </main>
    </div>
  );
}

export default App;
