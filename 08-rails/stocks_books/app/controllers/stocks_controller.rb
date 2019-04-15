class StocksController < ApplicationController
  def form
    render :form
  end

  def info
    @stock_symbol = params[:stock_symbol]
    info = StockQuote::Stock.quote @stock_symbol
    @price = info.close
    render :info
  end
end
