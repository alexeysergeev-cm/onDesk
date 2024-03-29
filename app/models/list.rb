class List < ApplicationRecord
  validates :title, :desk_id, :author_id, presence: true

  belongs_to :author, class_name: :User
  belongs_to :desk
  has_many :papers, dependent: :destroy

  after_commit :cast_to_channel, on: %i[create update destroy]

  def handle_transaction(destination_list, paper, source_order, destination_order, sender_id)
    ActiveRecord::Base.transaction do 
      self.update_attributes!(paper_order: source_order)
      destination_list.update_attributes!(paper_order: destination_order)
      paper.update_attributes!(list_id: destination_list.id)
    end
  end

  def cast_to_channel
    return if !Current.user
    DeskChannel.broadcast_to(self.desk, { event_type: "list_sync", sender_id: Current.user.id})
  end
end


