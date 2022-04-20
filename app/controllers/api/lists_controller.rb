class Api::ListsController < ApplicationController

  def create
    
    @list = current_user.lists.new(list_params)
    if @list.save 
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @list = List.find_by(id: params[:id])

    if @list 
      newParams = {}
      newParams.merge!(list_params)
      if !list_params["paper_order"].present?
        newParams["paper_order"] = []
      end
      if @list.update(newParams)
        render :show
      end
    else  
      render json: ["Only a list's author can update the title"], status: 401
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list 
      @list.destroy
      render :show
    else
      render json: ["Only a list's author can delete a list"], status: 401
    end
  end


  private
  def list_params
    params.require(:list).permit(:id, :title, :desk_id, :author_id, paper_order: [])
  end
end
