class Desk < ApplicationRecord
  validates :title, presence: true, uniqueness: true 

  belongs_to :author,
    class_name: :User

  has_many :desk_memberships, dependent: :destroy
  
  has_many :lists,
    dependent: :destroy

  has_many :papers,
    through: :lists,
    source: :papers,
    dependent: :destroy
  
  has_many :comments,
    through: :papers,
    source: :comments,
    dependent: :destroy

  DEFAULT_BACKGROUND_URL = "https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg";

  before_create :set_background_picture
  after_commit :send_cable, on: [:update]

  def set_background_picture 
    if self.background_picture.length == 0
      self.background_picture = DEFAULT_BACKGROUND_URL
    end
  end

  def send_cable
    if title_previously_changed? 
      # debugger
    end
    DeskChannel.broadcast_to(self, { event_type: "desk_sync", desk_id: self.id, title: self.title, list_order: self.list_order })
  end
end
