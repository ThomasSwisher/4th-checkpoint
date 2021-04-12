import { ProxyState } from "../AppState.js";
import Background from "../Models/Background.js";
import { sandboxBackgroundApi } from "./AxiosService.js";

// ============== Background Service
class BackgroundService {

    // ============= GetBackground==============
    async getBackground() {
        let res = await sandboxBackgroundApi.get()
        console.log(res.data)
        ProxyState.background = res.data
        // console.log(res.data)

    }

}

export const backgroundService = new BackgroundService();