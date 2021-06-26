class Api::SearchBarsController < ApplicationController

  def index

  end
  
  def search
    @desks = Desk.where('title LIKE ?', '%' + params[:q] + '%');
    debugger
  end
end
