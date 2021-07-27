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
    <div  id="weather">
        <h4 class="m-1"><b><u>Weather in:</u> ${this.name}. <u>Condition:</u> ${this.description} <u>Temp:</u>${this.f}℉</b></h4>
        <button class="btn btn-black btn-outline-dark m-1" onclick="app.weatherController.getWeather('${this.c}')">${this.c}℃</button>
        <button class="btn btn-black btn-outline-dark m-1" onclick="app.weatherController.getWeather('${this.temp}')">${this.temp}°K</button>

        </div>
    </div>
`
  }
}