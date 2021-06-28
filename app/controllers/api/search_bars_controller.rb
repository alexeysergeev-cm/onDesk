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
      @desks = Desk.where('lower(title) LIKE ?', '%' + params[:q].downcase + '%');
      @lists = List.where('lower(title) LIKE ?', '%' + params[:q].downcase + '%');
      @papers = Paper.where('lower(title) LIKE ?', '%' + params[:q].downcase + '%');
      render :index
    end
  end
end
