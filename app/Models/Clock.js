export default class Clock {
  constructor({ time }) {
    this.time = time;
  }

  get Template() {

    return `
        <i class="fa fa-cloud-moon-rain d-flex "></i>
        <h5 class="m-0">${this.main}</h5>
        </fa>
        <h5>${this.weather}</h5>
`
  }

}