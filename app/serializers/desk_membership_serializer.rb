class DeskMembershipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :desk_id
end
