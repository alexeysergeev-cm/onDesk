class Api::DeskMembershipsController < ApplicationController

  # def index
  #   @
  # end

  def create
    #check if user already a mamber
    @desk_membership = DeskMembership.new(membership_params)
    
    DeskMembership.all.each do |membership|
      if membership.user_id == @desk_membership.user_id && membership.desk_id == @desk_membership.desk_id 
        return render json: ['User already a member!'], status: 422
      end
    end

    if @desk_membership.save
      render json: { message: 'Success, user invited!'}
    end
  end

  private
  def membership_params
    params.require(:desk_membership).permit(:user_id, :desk_id)
  end
end
