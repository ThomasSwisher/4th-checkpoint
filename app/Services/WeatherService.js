import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxWeatherApi } from "./AxiosService.js";

// ============== Weather Service
class WeatherService {

    // ============= Get Weather ==============
    async getWeather() {
        let res = await sandboxWeatherApi.get()
        // =====  console.log(res.data) ==================
        ProxyState.weather = new Weather(res.data)
    }

}



export const weatherService = new WeatherService();