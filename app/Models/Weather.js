export default class Weather {
  constructor({ main, weather }) {
    this.main = Math.floor(main.temp)
    this.weather = weather[0].description
  }

  get Template() {

    return `
    <div class="row d-flex justify-content-end">
    <div class="col-md-1 d-flex justify-content-end flex-column align-items-end mt-3 mr-3" id="weather">
        <i class="fa fa-cloud-moon-rain d-flex "></i>
        <h5 class="m-0">${this.main}</h5>
        </fa>
        <h5>${this.weather}</h5>
    </div>
</div>
`
  }



}