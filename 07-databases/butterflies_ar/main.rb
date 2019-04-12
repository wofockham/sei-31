require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true # Since Rails 5
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE - Add a new butterfly to the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save

  redirect to("/butterflies/#{ butterfly.id }") # GET request
end

# SHOW - Shows a single butterfly in more detail
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# EDIT - Shows a form to edit a single butterfly
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE - Modify the database with new information for a particular butterfly
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{ params[:id] }")
end

# DESTROY - Deletes a given a butterfly from the database
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to("/butterflies")
end

# Plants CRUD ######################################################
# INDEX
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW
get '/plants/new' do
  erb :plants_new
end

# CREATE
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# SHOW
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# DELETE
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to("/plants")
end

after do
  ActiveRecord::Base.connection.close
end
