class DashboardController < ApplicationController
  def brother
    brother = %w( Groucho Harpo Chico ).sample
    render :plain => brother
  end
end
