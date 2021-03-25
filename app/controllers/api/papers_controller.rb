class Api::PapersController < ApplicationController

  def create
    @paper = Paper.new(paper_params)
    if @paper.save 
      render :show
    else
      render json: @paper.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @paper = Paper.find_by(id: params[:id])
    # if @paper && current_user.id == @paper.author_id          // remove only author can edit
    # debugger
    if @paper 
      if @paper.update(paper_params) && @paper.save
        # debugger
        render :show
      end
    else  
      render json: ["Only a paper's author can update the title"], status: 401
    end
  end

  def destroy
    @paper = Paper.find(params[:id])
    # if @paper && @paper.author_id == current_user.id          // remove only author can destroy
    if @paper 
      @paper.destroy
      render :show
    else
      render json: ["Only a paper's author can delete a paper"], status: 401
    end
  end


  private
  def paper_params
    params.require(:paper).permit(:id, :title, :list_id, :author_id, :description)
  end
end
