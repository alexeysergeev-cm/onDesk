class Desk < ApplicationRecord
  validates :title, presence: true, uniqueness: true 


end
