require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia' # Synchronous
puts data
