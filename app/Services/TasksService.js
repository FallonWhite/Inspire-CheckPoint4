import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";

class TasksService {
  addTask() {
    ProxyState.tasks = [...ProxyState.tasks, new Task()]
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
  destroy(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
}

export const tasksService = new TasksService()



