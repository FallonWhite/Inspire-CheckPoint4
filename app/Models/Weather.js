export default class Weather {
  constructor({ main, weather, name }) {
    this.name = name
    this.description = weather[0].main
    this.main = Math.floor(main.temp)
    this.weather = weather[0].description
    this.f = Math.floor(((this.temp - 273) * 1.8) + 32)
    this.c = Math.floor(this.temp - 273)
  }

  get Template() {

    return `
    <div id="weather">
        <h4 class="m-0"><b>Weather: ${this.name}, ${this.description}</b></h4>
        <h5>${this.f}℉, ${this.c}℃</h5> 
    </div>
`
  }



}