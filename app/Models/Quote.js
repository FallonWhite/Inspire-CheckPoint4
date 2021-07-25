export default class Quote {
  constructor({ content, author }) {
    this.content = content
    this.author = author
  }

  get Template() {
    return `
      <h2><b>"${this.content}"</b></h2>
      <p><i>"- ${this.author}"</i></p>
      `

  }

}