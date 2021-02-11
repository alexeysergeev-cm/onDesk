class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      # render json: @user.errors.full_messages, status: 401
      # render json: ["Email already in use by another account. You can use log in or use the forgot 
      #   password page to reset your password."], status: 401
      # <a href="#">log in</a> +
      render json: ["Email already in use by another account. You can use log in page"], status: 401
    end
  end

  def show
    @user = selected_user
  end
  

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
