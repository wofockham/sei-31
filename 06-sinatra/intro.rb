require 'sinatra'
require 'sinatra/reloader'
require 'pry' # This is a bad idea in general

# DSL: Domain Specific Language

get '/' do
  "Hello world from Sinatra!!!!!!!"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is: #{ `uptime` }"
end

# Marx Brothers Fanclub

# Dynamic URL
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fanclub."
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fanclub."
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fanclub. Their favourite Marx Brother is #{ params[:favourite].capitalize }."  
end
