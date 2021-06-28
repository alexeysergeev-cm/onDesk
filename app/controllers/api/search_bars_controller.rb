class Api::SearchBarsController < ApplicationController

  def index

  end
  
  def search
    if params[:q] === '' 
      @desks = [];
      @lists = [];
      @papers = [];
      render :index
    else
      @desks = Desk.where('title LIKE ?', '%' + params[:q] + '%');
      @lists = List.where('title LIKE ?', '%' + params[:q] + '%');
      @papers = Paper.where('title LIKE ?', '%' + params[:q] + '%');
      render :index
    end
  end
end
