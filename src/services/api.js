import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.webapiesperanca.online/webApiNet8/api/'
})

export default api;