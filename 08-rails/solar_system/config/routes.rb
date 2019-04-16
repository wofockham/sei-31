Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/:id' => 'planets#show', :as => 'planet'
end
