import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


//Private
function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.tasksController.addTask()">Add Task</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    _draw()
  }

  addTask() {
    tasksService.addTask()
  }

}
