export default class Weather {
  constructor({ main, weather, name }) {
    this.name = name
    this.description = weather[0].main
    this.temp = Math.floor(main.temp)
    this.weather = weather[0].description
    this.f = Math.floor(((this.temp - 273) * 1.8) + 32)
    this.c = Math.floor(this.temp - 273)
  }

  get Template() {

    return `
    <div class="col-2" id="weather">
        <h4 class="m-1"><b>Weather: ${this.name}, ${this.description}, ${this.temp}</b></h4>
        <h5>${this.f}℉, ${this.c}℃</h5> 
        <div class="d-flex justify-content-between">
        <button class="btn btn-black btn-outline-primary" onclick="app.weatherController.getWeather('${this.c}')">℃</button>
        <button class="btn btn-black btn-outline-primary" onclick="app.weatherController.getWeather('${this.f}')">℉</button>
        </div>
    </div>
`
  }
}