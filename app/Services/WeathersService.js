import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    let res = await weatherApi.get('')
    console.log(res.data)
    ProxyState.weathers = new Weather(res.data)
  }

  toggle() {
    let c = document.getElementById('c');
    let f = document.getElementById('f');

  }

}

export const weathersService = new WeathersService();