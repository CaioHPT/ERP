import axios from "axios";

const backApi = axios.create({
    baseURL: "http://localhost:8080/"
})

export default backApi