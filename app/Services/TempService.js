import { ProxyState } from "../AppState.js";
import Temp from "../Models/Temp.js";
import { sandboxTempApi } from "./AxiosService.js";

// ============== Weather Service
class TempService {

    // ============= Get Weather ==============
    async getTemp() {
        let res = await sandboxTempApi.get()
        let tempState = ProxyState.tempState
        let defaultTemp = res.data.main.temp
        tempState = !tempState
        // if (tempState) {
        //     c = defaultTemp − 273.15
        //     defaultTemp = c
        // } else {
        //     defaultTemp = "far"
        // }
        ProxyState.temp = new Temp({ temp: defaultTemp })
        ProxyState.tempState = tempState
    }

}



export const tempService = new TempService();