json.extract! movie, :id, :title, :streaming, :released, :rating, :plot, :created_at, :updated_at
json.url movie_url(movie, format: :json)
