import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxQuoteApi } from "./AxiosService.js";

// ============== Quote Service
class QuoteService {

    // ============= GetQuote==============
    async getQuote() {
        let res = await sandboxQuoteApi.get()
        // =====  console.log(res.data) ==================
        // ===== don't need map since it is just one?=====
        ProxyState.quote = new Quote(res.data[0])
        console.log(res.data)
    }

}


export const quoteService = new QuoteService();