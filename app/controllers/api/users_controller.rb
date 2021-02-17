class Api::UsersController < ApplicationController

  def index
    email = params[:email]
    user_id = User.where(email: email).pluck(:id)
    @user = User.find_by(id: user_id[0])

    # if @user 
    #   @DeskMembership = DeskMembership.create(@user.id)
    # else

    render :show
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
