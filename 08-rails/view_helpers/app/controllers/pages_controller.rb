class PagesController < ApplicationController
  def home
    render :home
  end

  def numbers
    @amount = 242984.2323
    @large_number = 234423434349
    @phone = 2125551212
    render :numbers
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 2
    @enemy_count = 2
    @story = "A very very very very very very very very very very very long time ago"
    render :text
  end

  def assets
    render :assets
  end

  def url
    render :url
  end
end
