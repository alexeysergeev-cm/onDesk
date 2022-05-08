class DeskMembership < ApplicationRecord
  belongs_to :desk
  belongs_to :user
    
  after_save :cast_to_channel_with_save
  after_destroy :cast_to_channel_with_destroy

  def cast_to_channel_with_save
    DeskChannel.broadcast_to(self.desk, { 
      event_type: "member_sync", 
      member: UserSerializer.new(self.user), 
      action_type: "create", 
      desk_membership: DeskMembershipSerializer.new(self)
    })
  end


  def cast_to_channel_with_destroy
    DeskChannel.broadcast_to(self.desk, { 
      event_type: "member_sync", 
      action_type: "delete", 
      desk_membership: DeskMembershipSerializer.new(self)
    })
  end
end
