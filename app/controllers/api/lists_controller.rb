class Api::ListsController < ApplicationController

  def create
    debugger
    @list = current_user.lists.new(list_params)
    if @list.save 
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @list = List.find_by(id: params[:id])
    if @list && current_user.id == @list.author_id
      if @list.update(list_params)
        render :show
      end
    else  
      render json: ["Only a list's author can update the title"], status: 401
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list && @list.author_id == current_user.id
      @list.destroy
      render :show
    else
      render json: ["Only a list's author can delete a list"], status: 401
    end
  end


  private
  def list_params
    params.require(:list).permit(:title, :desk_id, :author_id)
  end
end
