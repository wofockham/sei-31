class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.authenticate params[:password]
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path # Send them back to try again.
    end
  end
end
