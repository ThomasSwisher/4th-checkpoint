import { ProxyState } from "../AppState.js";
import { tempService } from "../Services/TempService.js";


//Private
function _draw() {
    document.getElementById('temp').innerHTML = ProxyState.temp.Template
}

// ============= Listener =====================
//Public
export default class TempController {
    constructor() {
        ProxyState.on("temp", _draw);
        // NOTE get todos on draw
    }

    // ============= Get Todos =====================
    async getTemp() {
        try {
            await tempService.getTemp()
        } catch (error) {
            console.error(error)
        }
    }

}
