Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/stocks' => 'stocks#form'
  get '/stocks/info' => 'stocks#info'

  get '/books' => 'books#form'
  get '/books/info' => 'books#info'
end
