export default class Quote {
  constructor({ content, author }) {
    this.content = content
    this.author = author
  }

  get Template() {
    return `

    <div class="col-8 mt-5 p-4 justify-content: center;" style="background-color: grey; opacity: 0.75"; justify-content: center;>
      <h2 class="quote quoteText" style="color: black; text-shadow: 1px 1px white"><b>"${this.content}"</b></h2>
      <h5 class="hide"><i><b>-"${this.author}"</b></i></h5>
      `

  }

}