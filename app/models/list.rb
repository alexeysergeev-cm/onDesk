class List < ApplicationRecord
  validates :title, :desk_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :desk,
    class_name: :Desk

  has_many :papers
end
