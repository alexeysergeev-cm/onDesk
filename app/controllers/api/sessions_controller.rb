class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials( params[:user][:useranme],
                                      params[:user][:password]
                                    )
    if @user 
      render '/api/users/show'
    else
      render json: ['Invalid username or password, please try again'], 
        status: 404
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful'}
  end
end
