class Desk < ApplicationRecord
  validates :title, presence: true, uniqueness: true 

  belongs_to :author,
    class_name: :User

  has_many :desk_memberships
  
  has_many :lists,
    dependent: :destroy

  has_many :papers,
    through: :lists,
    source: :papers,
    dependent: :destroy
  
  has_many :comments,
    through: :papers,
    source: :comments,
    dependent: :destroy

end
