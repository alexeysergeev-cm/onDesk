class Api::LinksController < ApplicationController
   def create 
    @link = Link.new(link_params)
    if @link.save
      render :show
    else
      render json: @link.errors.full_messages, status: :unprocessable_entity 
    end
  end

  def show 
    
  end

  def update
    @link = Link.find(params[:id])
    if @link && @link.update(link_params)
      render :show
    else
      render json: ["Something went wrong"], status: 401
    end
  end

  def destroy
    @link = Link.find(params[:id])
    if @link && @link.destroy
      render :show
    else 
      render json: ["Something went wrong"], status: 401
    end
  end

  private
  def link_params
    params.require(:link).permit(:url)
  end
end
