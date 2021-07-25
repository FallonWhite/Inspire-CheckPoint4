export default class Weather {
  constructor({ main, weather }) {
    this.main = Math.floor(main.temp)
    this.weather = weather[0].description
  }

  get Template() {

    return `
    <div id="weather" style="background-color: grey; opacity: 0.75"; justify-content: center;>
        <i class="fa fa-cloud-moon-rain d-flex "></i>
        <h5 class="m-0">${this.main}</h5>
        </fa>
        <h5>${this.weather}</h5> </div >
`
  }



}