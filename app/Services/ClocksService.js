import { ProxyState } from "../AppState.js";
import Clock from "../Models/Clock.js"

class ClocksService {
  async getAllClock(url = '') {

    const res = await api.get(url)

    console.log(res.data.results)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    let clock = res.data.results.map(c => new Clock(c))
    ProxyState.clocks = clock
  }
}
export const clocksService = new ClocksService()