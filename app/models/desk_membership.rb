class DeskMembership < ApplicationRecord

  belongs_to :desk
  belongs_to :user,
    class_name: :User
end
