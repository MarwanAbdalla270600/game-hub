import axios from "axios"

class GamehubService {
    private baseUrl = import.meta.env.VITE_API_URL
    private apikey = import.meta.env.VITE_SECRET_KEY

    getGames() {
        
    }

}

export default new GamehubService()