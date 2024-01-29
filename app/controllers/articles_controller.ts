// import type { HttpContext } from '@adonisjs/core/http'

export default class ArticlesController {
  async fetchArticles({ view }: { view: any }) {
    return view.render('news/index')
  }

  async create({ view }: { view: any }) {
    return view.render('news/create')
  }
}
