import axios from "axios";

const apiKey = "0d04208754e5ab7a8e64fa0f3128ea87";

const apiClima = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    params: {
        appid : apiKey,
        units: 'metric',
        lang: 'pt'
    }
})

export default apiClima;