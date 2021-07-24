export default class Task {
    constructor(data) {
        this.title = data.title
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 task">
            ${this.title}
        </div>
        `
    }
}
