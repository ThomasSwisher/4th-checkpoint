import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
    // let todos = ProxyState.todos
    // let template = ''
    // todos.forEach(todos => {
    //     template += todos.Template
    // })
    //document.getElementById('todos').innerHTML = template
}

// ============= Listener =====================
//Public
export default class TodosController {
    constructor() {
        ProxyState.on("weather", _draw);
        // NOTE get todos on draw
    }

    // ============= Get Todos =====================
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

}
