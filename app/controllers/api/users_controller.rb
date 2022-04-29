class Api::UsersController < ApplicationController

  def index
    email = params[:email]
    user_id = User.where(email: email).pluck(:id)
    @user = User.find_by(id: user_id[0])

    if @user 
      render :show
    else
      render json: ['User does not exist!'], status: 404
    end
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
      render json: ["This email already in use."], status: 401
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: ["no photo attached"]
    end
  end

  def show
    @user = selected_user
    # render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :photo)
  end
end
