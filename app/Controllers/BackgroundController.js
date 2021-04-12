import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

//Private 
function _draw() {
    // TODO =====================
    //document.getElementById('background').innerHTML = ProxyState.background.template
    document.getElementById('background-image').style.backgroundImage = 'url(' + ProxyState.background.url + ')'
}

//Public
export default class BackgroundController {
    constructor() {
        ProxyState.on("background", _draw);
        ProxyState.on("image", _draw);
        // NOTE this loads (houses, cars, pokemon, whatever) on start.
        this.getBackground()
    }

    async getBackground() {
        try {
            await backgroundService.getBackground()
        } catch (error) {
            console.error(error)
        }
    }
}