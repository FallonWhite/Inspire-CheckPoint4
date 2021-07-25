import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

function _draw() {
  let clock = ProxyState.clock
  let template = ''
  clock.forEach(c => template += c.Template)
  document.getElementById('clock').innerHTML = template

  document.getElementById('buttons').innerHTML = `
  <div class="col-4 d-flextext-center">
  <h2><span id="clock">2:10:00</span></h2>`

}


export default class ClockController {
  constructor() {
    // REGISTER ALL LISTENERS
    ProxyState.on('clock', _draw)

    // GET DATA FOR CONTROLLER
    this.getAll()
  }

  async getAll() {
    try {
      await clockService.getAllclock()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }

}