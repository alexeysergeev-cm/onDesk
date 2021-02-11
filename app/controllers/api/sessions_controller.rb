class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials( params[:user][:email],
                                      params[:user][:password]
                                    )
    if @user 
      login!(@user)
      # redirect_to '/'
      render '/api/users/show'
    else
      render json: ["There isn't an account for this username"], status: 404
      # flash.now[:errors] = ['Invalid username or password.']
    end
  end

  def destroy
    if current_user.nil?
      render json: ['You must be logged in'], status: 404
    else 
      logout!
      render json: { message: 'Logout successful'}
    end
  end
end
