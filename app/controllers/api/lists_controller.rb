class Api::ListsController < ApplicationController
  before_action :require_logged_in!
  
  def index 
    @lists = List.where(desk_id: params[:desk_id])
    render :index
  end

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
    if @list && @list.update(list_params)
      render :show
    else  
      render json: ["Only a list's author can update the title"], status: 401
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list && @list.destroy
      render :show
    else
      render json: ["Only a list's author can delete a list"], status: 401
    end
  end

  def update_two_lists
    @source_list = List.find(params[:id])
    @destination_list = List.find(two_lists_params[:destination_list_id])
    @paper = Paper.find(two_lists_params[:paper_id])
    source_order = two_lists_params[:source_order]
    destination_order = two_lists_params[:destination_order]
    sender_id = two_lists_params[:sender_id]

    begin
      @source_list.handle_transaction(@destination_list, @paper, source_order, destination_order, sender_id)
      render :update_two_list_transaction
    rescue => exception
      render json: [exception], status: :unprocessable_entity
    end
  end


  private
  def list_params
    defaults = { paper_order: [] }
    params.require(:list).permit(:id, :title, :desk_id, :author_id, paper_order: []).reverse_merge(defaults)
  end

  def two_lists_params
    params.require(:payload).permit(:destination_list_id, :paper_id, :sender_id, source_order: [], destination_order: [])
  end
end

