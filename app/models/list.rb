class List < ApplicationRecord
  validates :title, :desk_id, :author_id, presence: true

  belongs_to :author, class_name: :User
  belongs_to :desk
  has_many :papers, dependent: :destroy

  after_commit :send_cable, on: [:update, :create]

  def send_cable
    DeskChannel.broadcast_to(self.desk, { type: "LIST_ACTION", list_id: self.id })
  end

  def handle_transaction(destination_list, paper, source_order, destination_order)
    ActiveRecord::Base.transaction do 
      self.update_attributes!(paper_order: source_order)
      destination_list.update_attributes!(paper_order: destination_order)
      paper.update_attributes!(list_id: destination_list.id)
      # raise "Oops, something went wrong"
      raise "Oops, something went wrong" unless self.save && destination_list.save && paper.save
    end
  end
end
