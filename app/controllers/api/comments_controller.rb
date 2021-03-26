class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save 
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment && current_user.id == @comment.author_id        
      if @comment.update(comment_params) && @comment.save
        render :show
      end
    else  
      render json: ["Only author can update this comment"], status: 401
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment && @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Only author can delete this comment"], status: 401
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:id, :body, :paper_id, :author_id)
  end

end
