import axios from "axios";

export const catsApi = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images",    
    headers: { "x-api-key": "3b5a601a-ef7b-4417-b10e-994a7c3e774f" }
});