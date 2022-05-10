class Paper < ApplicationRecord
  validates :title, :list_id, :author_id, presence: true

  belongs_to :author, class_name: :User
  belongs_to :list, class_name: :List
  has_many :comments, dependent: :destroy

  after_commit :cast_to_channel, on: %i[create update destroy]

  def cast_to_channel
    return if !Current.user
    if description_previously_changed? || title_previously_changed?
      DeskChannel.broadcast_to(self.list.desk, { event_type: "paper_sync", sender_id: Current.user.id, paper: PaperSerializer.new(self)})
    end
  end
end
