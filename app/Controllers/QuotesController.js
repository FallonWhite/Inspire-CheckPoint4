
import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawAll() {
  const quotes = ProxyState.quotes
  let template = ''
  quotes.forEach(q => template += q.Template)
  document.getElementById('quote').innerHTML = template
}

export default class quotesController {
  constructor() {
    ProxyState.on('quotes', _drawAll)
    quotesService.getAllQuotes()
    this.getNewQuote()
  }

  async getAllQuotes() {
    try {
      await quotesService.getAllQuotes()
    } catch (error) {
      console.error(error)
    }
  }
}