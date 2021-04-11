import { ProxyState } from "../AppState.js";
import Background from "../Models/Background.js";
import { sandboxBackgroundApi } from "./AxiosService.js";

// ============== Background Service
class BackgroundService {

    // ============= GetBackground==============
    async getBackground() {
        debugger
        let res = await sandboxBackgroundApi.get(url)
        // =====  console.log(res.data) ==================
        ProxyState.Background = new Background(res.data)
    }

}


export const backgroundService = new BackgroundService();