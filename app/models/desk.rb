class Desk < ApplicationRecord
  validates :title, presence: true, uniqueness: true 

  belongs_to :author,
    class_name: :User

end
