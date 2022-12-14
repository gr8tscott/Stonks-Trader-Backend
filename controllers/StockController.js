const { Stock } = require('../models')

const createStock = async (req, res) => {
  let create = await Stock.create({
    ...req.body,
    stockId: req.query.ticker,
    stockId: req.query.watchlistId
  })
  res.send(create)
}

const getStock = async (req, res) => {
  try {
    let stocks = await Stock.findAll()
    res.send(stocks)
  } catch (error) {
    throw error
  }
}

const getStocksByWatchlistId = async (req, res) => {
  try {
    let watchlistId = parseInt(req.params.watchlist_id)
    let stock = await Stock.findAll({
      where: { watchlistId: watchlistId }
    })
    res.send(stock)
  } catch (error) {
    throw error
  }
}

const getStocksByPortfolioId = async (req, res) => {
  try {
    let portfolioId = parseInt(req.params.portfolio_id)
    let stock = await Stock.findAll({
      where: { portfolioId: portfolioId }
    })
    res.send(stock)
  } catch (error) {
    throw error
  }
}

const updateStock = async (req, res) => {
  try {
    let update = await Stock.update(
      { ...req.body },
      { where: { id: req.params.stock_id }, returning: true }
    )

    res.send(update)
  } catch (error) {
    throw error
  }
}

const deleteStock = async (req, res) => {
  try {
    let del = parseInt(req.params.stock_id)
    await Stock.destroy({
      where: { id: req.params.stock_id }
    })
    res.send({ message: `Deleted stock with an id of ${del}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getStock,
  createStock,
  updateStock,
  deleteStock,
  getStocksByWatchlistId,
  getStocksByPortfolioId
}
