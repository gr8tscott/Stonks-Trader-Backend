const Router = require('express').Router()
const controller = require('../controllers/watchlistController')

Router.get('/watchlist', controller.getWatchlist)
Router.post('/addwatchlist', controller.createWatchlist)
Router.delete('/:watchlist_d', controller.deleteWatchlist)
Router.put('/:watchlist_id', controller.updateWatchlist)

module.exports = Router