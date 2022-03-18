import axios from "axios";

const cepApi = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default cepApi