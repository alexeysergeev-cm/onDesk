class List < ApplicationRecord
  validates :title, :desk_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :desk,
    class_name: :Desk

  has_many :papers,
    dependent: :destroy

  # after_commit :cable_for_update, on: [:update]
  # after_commit :cable_for_create, on: [:create]
  after_commit :send_cable, on: [:update, :create]

  def send_cable
    DeskChannel.broadcast_to(self.desk, {type: "LIST_ACTION", list_id: self.id})
  end
end
