import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

//REVIEW ===========================================
//Private _UnderscoreMakesItSo
function _draw() {
    document.getElementById('quote').innerHTML = ProxyState.quote.template
}
// =====================================================

//Public
export default class QuoteController {
    constructor() {
        ProxyState.on("quote", _draw);

        // REVIEW this all needs to be spun up to console.log() api info ====================
        // NOTE this loads (houses, cars, pokemon, whatever) on start.
        this.getQuote()
    }

    async getQuote() {
        // NOTE ============= ALWAYS WRAP async/await calls with try/catch/error trackers.
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}