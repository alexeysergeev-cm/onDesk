class ApplicationController < ActionController::Base
  
  helper_method :current_user, :logged_in?
  #CRLLL

  def current_user

    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token]) #we find user
    # return @current_user
  end

  def require_logged_in!
    redirect_to api_session_url unless logged_in?
  end

  def login!(user)
    @current_user = user 
    session[:session_token] = user.reset_sesssion_token!
  end

  def logged_in?
    !!current_user
  end

  def logout!
    @current_user.reset_sesssion_token!
    session[:session_token] = nil 
    @current_user = nil 
  end

end
