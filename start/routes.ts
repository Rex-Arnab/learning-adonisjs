/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import ArticlesController from '#controllers/articles_controller'
import router from '@adonisjs/core/services/router'
// import { Database } from '@adonisjs/lucid/database'

router.on('/').render('pages/home')

// router.get('/news', async (ctx) => {
//   return new ArticlesController().fetchArticles(ctx)
// })

router.get('/news', 'ArticlesController.fetchArticles')

// router.get('/db_test', async () => {
//   const news = await Database.query().from('news')
//   return news
// })
