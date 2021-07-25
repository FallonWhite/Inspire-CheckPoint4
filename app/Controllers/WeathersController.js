import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _draw() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeathersController {
  constructor() {
    ProxyState.on('weather', _draw)

    this.getNewWeather()
  }

  async getNewWeather() {
    try {
      await weathersService.getNewWeather()
    } catch (error) {
      console.error(error)
    }
  }
}