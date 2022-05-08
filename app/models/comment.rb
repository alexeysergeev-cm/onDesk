class Comment < ApplicationRecord
  validates :body, :paper_id, :author_id, presence: true

  belongs_to :author, class_name: :User
  belongs_to :paper

  after_commit :cast_to_channel, on: %i[create update destroy]

  def cast_to_channel    
    DeskChannel.broadcast_to(self.paper.list.desk, { event_type: "comment_sync", sender_id: Current.user.id, comment: CommentSerializer.new(self)})
  end
end
