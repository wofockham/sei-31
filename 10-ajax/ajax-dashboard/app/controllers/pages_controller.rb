class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico ).sample
    @time = Time.now
    @uptime = `uptime`
    @fortune = `fortune`
  end
end
