class Paper < ApplicationRecord
  validates :title, :list_id, :author_id, presence: true

  belongs_to :author, class_name: :User
  belongs_to :list, class_name: :List
  has_many :comments, dependent: :destroy

end
