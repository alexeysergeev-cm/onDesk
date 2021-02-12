class Api::DesksController < ApplicationController

  def index
    @desks = Desk.all 
  end

  def create
    @desk = current_user.desks.new(desk_params)
    if @desk.save 
      render :show
    else
      render json: @desk.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def desk_params
    params.require(:desk).permit(:title, :author_id)
  end

end
