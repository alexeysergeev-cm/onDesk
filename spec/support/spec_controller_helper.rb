module SpecControllerHelper   
  def login(user)
    session[:session_token] = user.session_token
  end
end