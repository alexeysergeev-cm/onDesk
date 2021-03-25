class Comment < ApplicationRecord
  validates :body, :paper_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :paper,
    class_name: :Paper
end
