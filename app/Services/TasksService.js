import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksApi } from "./AxiosService.js";

class TasksService {
  async setTasks(Task) {
    const res = await tasksApi.push('task')
    ProxyState.tasks = new Task[(res.data)]
    console.log(ProxyState.tasks)
  }
  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    localStorage.removeItem(id)
  }
  destroy(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
  //need to figure out toggle feature//
  toggledTaskSelection(id) {
    ProxyState.tasks = [...ProxyState.tasks]
  }
  async postToSandbox() {
    const res = await tasksApi.post('tasks', ProxyState.tasks)
    console.log(new Task(res.data))
  }

  updateTask(id) {
    if (localStorage.getItem(id) === 'checked') {
      localStorage.setItem(id, '')
      localStorage.removeItem(id)
    } else {
      localStorage.setItem(id, "checked")
    }
  }
}
export const tasksService = new TasksService()

