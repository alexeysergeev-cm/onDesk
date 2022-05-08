class Api::DeskMembershipsController < ApplicationController
  def create
    @desk_membership = DeskMembership.new(membership_params)
    DeskMembership.find_each do |membership|
      if membership.user_id == @desk_membership.user_id && membership.desk_id == @desk_membership.desk_id 
        return render json: ['User already a member!'], status: 422
      end
    end

    if @desk_membership.save
      @member = User.find(@desk_membership.user_id) 
      render :show
    end
  end

  def destroy
    @desk_membership = DeskMembership.find(params[:id])

    if @desk_membership.destroy
      render :show
    else
      render json: @desk_membership.errors.full_messages, status: 422
    end
  end

  private
  def membership_params
    params.require(:desk_membership).permit(:user_id, :desk_id)
  end
end
