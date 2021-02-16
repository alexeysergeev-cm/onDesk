class Api::DeskMembershipsController < ApplicationController

  def create
    @desk_membership = DeskMembership.new(desk_m)
    if @desk_membership.save
      render json: { message: 'Success!'}
    else
      render json: ['Can`t assign that user!'], status: 404
    end
  end

  private
  def desk_m
    require(:desk_memberships).permit(:user_id, :desk_id)
  end
end
