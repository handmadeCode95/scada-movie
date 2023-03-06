import axios from "axios";

const API_KEY = `api_key=${import.meta.env.VITE_API_KEY}`;

const Api = axios.create({
    baseURL: import.meta.env.VITE_BASE_PATH,
});

export const getMovies = () => {
    try {
        return Api.get(`/now_playing?${API_KEY}`);
    } catch (error) {
        console.log("error", error);
    }
};
