Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/api/brother' => 'dashboard#brother'
end
