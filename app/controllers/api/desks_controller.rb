class Api::DesksController < ApplicationController
  before_action :require_logged_in!

  def index
    @desks = Desk.all 
    render :index
  end

  def create
    @desk = Desk.new(desk_params)
    if @desk.save 
      dm = DeskMembership.new(user_id: current_user.id, desk_id: @desk.id)
      dm.save
      render :show
    else
      render json: @desk.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @desk = Desk.includes(:lists, :papers, :comments, :desk_memberships).find_by(id: params[:id])
    render :show
  end

  def update
    @desk = Desk.find_by(id: params[:id])
    if @desk
      if @desk.update(desk_params)
        render :show
      end
    else  
      render json: ["Only a Desk's author can update the Title"], status: 401
    end
  end

  def destroy
    @desk = Desk.find(params[:id])
    if @desk && @desk.author_id == current_user.id
      @desk.destroy
      render 'api/desks/index'
    else
      render json: ["Only a Desk's author can delete a shared desk"], status: 401
    end
  end


  private
  def desk_params
    params.require(:desk).permit(:id, :title, :author_id, :background_picture, list_order: [])
  end
end
