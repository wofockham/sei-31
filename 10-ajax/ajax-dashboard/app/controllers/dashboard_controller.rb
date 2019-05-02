class DashboardController < ApplicationController
  def brother
    brother = %w( Groucho Harpo Chico Zeppo Gummo ).sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    render :plain => `uptime` # Backticks won't work on Heroku
  end

  def fortune
    fortune = `fortune`
    render :plain => fortune
  end

  def info
    brother = %w( Groucho Harpo Chico Zeppo Gummo ).sample
    time = Time.now
    uptime = `uptime`
    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime
    }
  end
end
