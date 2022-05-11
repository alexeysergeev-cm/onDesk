class Api::LinksController < ApplicationController
  # before_action :require_logged_in!
  before_action :does_link_exist?, only: [:create]

  def create 
    @link = Link.new(link_params)
    if @link.save
      render json: @link.short
    else
      render json: @link.errors.full_messages, status: :unprocessable_entity 
    end
  end

  def show 
    @link = Link.find_by_slug(params[:slug])
    if @link
      @link.update_attributes(clicked: @link.clicked + 1)
      redirect_to @link.url
    else 
      render json: ["Link not found"], status: 404
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

  def does_link_exist?
    @known_link = Link.find_by_url(link_params[:url])
    render json: @known_link.short if @known_link
  end
end
