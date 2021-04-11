import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

//Private 
function _draw() {
    // TODO =====================
    //document.getElementById('background').innerHTML = ProxyState.quote.template
}

//Public
export default class BackgroundController {
    constructor() {
        ProxyState.on("background", _draw);
        // NOTE this loads (houses, cars, pokemon, whatever) on start.
    }

    async getBackground() {
        try {
            await backgroundService.getBackground()
        } catch (error) {
            console.error(error)
        }
    }
}