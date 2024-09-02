import axios from 'axios';

const localizador = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default localizador;