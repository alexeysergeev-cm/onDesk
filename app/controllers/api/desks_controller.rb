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

  def show
    @desk = Desk.find(params[:id])
  end

  def destroy
    @desk = Desk.find(params[:id])
    if @desk && @desk.author_id == current_user.id
      @desk.destroy
      render 'api/desks/index'
    else
      render json: ['Only a Desk`s author can delete a shared desk'], status: 401
    end
  end


  private
  def desk_params
    params.require(:desk).permit(:title, :author_id)
  end

end
