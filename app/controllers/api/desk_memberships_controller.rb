class Api::DeskMembershipsController < ApplicationController

  def create
    @desk_membership = DeskMembership.new(membership_params)
    if @desk_membership.save
      render json: { message: 'Success!'}
    else
      render json: ['Can`t assign that user!'], status: 404
    end
  end

  private
  def membership_params
    params.require(:desk_membership).permit(:user_id, :desk_id)
  end
end
