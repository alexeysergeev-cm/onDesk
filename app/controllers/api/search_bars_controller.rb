class Api::SearchBarsController < ApplicationController

  def index

  end
  
  def search
    if params[:q] === '' 
      @desks = [];
      render :index
    else
      @desks = Desk.where('title LIKE ?', '%' + params[:q] + '%');
      render :index
    end
  end
end
