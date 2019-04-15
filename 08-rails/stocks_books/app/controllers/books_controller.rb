class BooksController < ApplicationController
  def form
    render :form
  end

  def info
    @title = params[:title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
    info = HTTParty.get url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    render :info
  end
end
