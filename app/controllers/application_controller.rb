class ApplicationController < ActionController::Base
  # skip_forgery_protection # use in postman 
  helper_method :current_user, :logged_in?
  before_action :set_current_user

  #CRLLL

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token]) #we find user
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

  private
  def set_current_user
    Current.user = current_user
  end
end
