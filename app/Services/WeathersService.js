import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    const res = await weatherApi.get('')
    console.log(res.data)
    ProxyState.weathers = new Weather(res.data)
  }
  //TOGGLE if/else statement needed. Need to come back to this. For now I added btn to display conversion but they are not working either//

  // toggle() {
  //   let c = document.getElementById('c');
  //   let f = document.getElementById('f');

  //  }

}

export const weathersService = new WeathersService();