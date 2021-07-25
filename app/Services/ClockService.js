import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js"
import { api } from "./AxiosService.js"

class ClockService {
  async getAllClock(url = '') {

    const res = await api.get(url)

    console.log(res.data.results)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    let myth = res.data.results.map(m => new Myth(m))
    ProxyState.myths = myth
  }


}
export const mythsService = new MythsService()