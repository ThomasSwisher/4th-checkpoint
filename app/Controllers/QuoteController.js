import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

//REVIEW ===========================================
//Private _UnderscoreMakesItSo
function _draw() {
    document.getElementById('quote').innerHTML = ProxyState.quote.Template
    currentTime();
}
// =====================================================



function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

//Public
export default class QuoteController {
    constructor() {
        ProxyState.on("quote", _draw);
        ProxyState.on("author", _draw);

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