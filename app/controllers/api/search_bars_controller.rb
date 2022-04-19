class Api::SearchBarsController < ApplicationController
  before_action :get_user_related_data, only: %i[search]

  def index
  end
  
  def search
    if params[:q] == '' || params[:q].nil?
      head :ok
    else
      query = params[:q].downcase
      
      @desks = @d.where('lower(title) LIKE ?', '%' + query + '%')
      @lists =  @l.where('lower(lists.title) LIKE ?', '%' + query + '%')
      @papers = @p.where('lower(papers.title) LIKE ?', '%' + query + '%')

      render :index
    end
  end

  private

  def get_user_related_data
    @d = Desk.joins(:desk_memberships).where("desk_memberships.user_id = ?", current_user.id)
    @l = List.joins(:desk).where("desks.id IN (?)", @d.ids)
    @p = Paper.joins(:list).where("lists.id IN (?)", @l.ids)
  end
end
