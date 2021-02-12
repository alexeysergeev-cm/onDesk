class Api::DesksController < ApplicationController

  def index
    @desks = Desk.all 
  end

  def create
    @desk = Desk.new(desk_params)
    if @desk.save 
      render :index
    else
      render :json @desk.errors.full_messages, status: 404
    end
  end

  private
  def desk_params
    params.require(:desk).permit(:title)
  end

end
