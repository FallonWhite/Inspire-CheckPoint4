import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


//Private
function _draw() {
  let template = ''
  let tasks = ProxyState.tasks;
  tasks.forEach(tasks => template += tasks.Template)
  document.getElementById('tasks').innerHTML = template
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);

    _draw()
  }

  addTask(id) {
    event.preventDefault()
    let form = event.target
    let newTask = {
      id,
      // @ts-ignore
      name: form.task.value,
    }
    tasksService.addTask()
    // @ts-ignore
    form.reset()
  }
}
