import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class Task {
    constructor({ name, id = generateId() }) {
        this.id = id
        this.name = name
        this.total = 1
        this.checked = localStorage.getItem(this.id)
    }

    get Template() {
        return `
    <div class="${this.id}">
    <input type="checkbox" class="m-2" onclick="app.tasksController.checkbox('${this.id}')" ${this.checked ? 'checked' : ''}>
    ${this.name} 
<button type="destroy" class="btn btn-dark btn-outline-info btn-sm my-1 ml-5 pull-right" onclick="app.tasksController.removeTask('${this.id}')">Delete</button>`
    }

    //to display task total//
    get MyTasks() {
        let template = ''
        let tasksTotal = 0
        let tasks = ProxyState.
            tasks.forEach(t => {
                template += t.Template
            })

        if (!template) {
            template += "No tasks"
        }
        return template
    }
}
