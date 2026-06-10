import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.92.199.17:3000",
    timeout: 10000,

});
