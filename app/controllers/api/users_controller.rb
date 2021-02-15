class Api::UsersController < ApplicationController

  def index
    # email = params[query]
    # user = User.where(email: email)
    # 
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      @user.errors.full_messages.each do |error|
        if error.include?('Password')
          return render json: [error], status: 404
        end
      end 
      render json: ["Email already in use by another account. You can use "], status: 401
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
