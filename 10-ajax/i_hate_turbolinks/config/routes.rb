Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/contact' => 'pages#contact'
end
