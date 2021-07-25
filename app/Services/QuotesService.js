import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { quotesApi } from './AxiosService.js'

class QuotesService {
  constructor() {
    this.getAllQuotes()
  }
  async getAllQuotes() {
    let res = await quotesApi.get('')
    ProxyState.quotes = new Quote(res.data);
  }
}

export const quotesService = new QuotesService()