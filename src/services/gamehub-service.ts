import axios from "axios"
import { Response, Game, Genre } from "./gamehub-modals"


class GamehubService {
    private baseUrl = import.meta.env.VITE_API_URL
    private apikey = import.meta.env.VITE_SECRET_KEY

    getGames() {
        return axios.get<Response<Game>>(this.baseUrl + '/games', {
            params: {
                'key': this.apikey,
            }
        })
    }

    getGenres() {
        return axios.get<Response<Genre>>(this.baseUrl + '/genres', {
            params: {
                'key': this.apikey
            }
        })
    }
}

export default new GamehubService()