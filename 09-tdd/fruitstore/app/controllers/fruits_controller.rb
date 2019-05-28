class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC')

    respond_to do |format|
      format.html { } # This empty block means to follow the default Rails behaviour.
      format.json { render :json => @fruits }
    end
  end
end
