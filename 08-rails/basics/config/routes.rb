Rails.application.routes.draw do
  root :to => 'pages#hello' # or get '/' => 'pages#hello'
  get '/hello' => 'pages#hello'
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'
end
