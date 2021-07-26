import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


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
    ProxyState.on("tasks", saveState);

    loadState()
  }

  addTask() {
    event.preventDefault()
    let form = event.target
    let newTask = {

      // @ts-ignore
      name: form.addTask.value,

    }
    tasksService.addTask(newTask)
    // @ts-ignore
    form.reset()
  }


  //NEED to get toggle to work. Boolean can't be 'string'. The below si a placeholder for the taskToggle//
  toggledTaskSelection(taskId) {
    console.log(taskId, ProxyState.tasks)
    const existingTask = ProxyState.tasks.find(t => t.id == taskId)
    task.checked = !task.checked
    tasksService.toggledTaskSelection()
  }

  onPageLoad(id) {
    // @ts-ignore
    document.getElementById(id).checked = false
  }
  postToSandbox() {
    tasksService.postToSandbox()
  }

  destroy(id) {
    if (window.confirm("Confirm Delete?")) {
      tasksService.destroy(id)
    }
  }
  removeTask(id) {
    if (window.confirm("Confirm Delete?")) {
      tasksService.removeTask(id)
    }
  }
  checkbox(id) {
    tasksService.updateTask(id);
    loadState()
  }
}
