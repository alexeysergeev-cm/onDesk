class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials( params[:user][:email],
                                      params[:user][:password]
                                    )
    if @user 
      login!(@user)
      render '/api/users/show'
    else
      render json: ["There isn't an account for this email"], status: 404
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
