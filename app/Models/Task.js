import { ProxyState } from "../AppState.js"


export default class Task {
    constructor({ name, id, checked }) {
        this.id = id
        this.name = name
        this.total = 1
        this.checked = checked
    }

    get Template() {
        console.log(this.checked)
        return `
    <div class="${this.id}">
    <input type="checkbox" style="background-color: ${this.name}" class="mr-2" onclick="app.tasksController.checkBox('${this.id}')" ${this.checked ? 'checked' : ''}>
    ${this.name} 
<button type="destroy" class="btn btn-primary btn-outline-info btn-sm my-1 ml-5 pull-right" onclick="app.tasksController.removeTask('${this.id}')">Delete</button>`
    }

    //to display task total//
    get MyTasks() {
        let template = ''
        let tasksTotal = 0
        let tasks = ProxyState.tasks.filter(task => task.id === this.id)
        tasks.forEach(t => {
            template += t.Template
            tasksTotal += t.total
        })

        if (!template) {
            template += "No tasks"
        }
        return [template, tasksTotal]
    }
}
