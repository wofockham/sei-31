Rails.application.routes.draw do
  root :to => 'pages#hello'
  get '/hello' => 'pages#hello'
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
