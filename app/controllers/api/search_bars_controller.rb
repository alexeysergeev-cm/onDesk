class Api::SearchBarsController < ApplicationController

  def index

  end
  
  def search
    return if params[:q] === '';
    @desks = Desk.where('title LIKE ?', '%' + params[:q] + '%');
    render :index
  end
end
