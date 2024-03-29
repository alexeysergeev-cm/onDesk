class User < ApplicationRecord
  validates :session_token, :email, presence: true, uniqueness: true
  validates :username, presence: true  #change to full name
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :desks, foreign_key: :author_id
  has_many :desk_memberships, foreign_key: :user_id
  has_many :lists, foreign_key: :author_id

  has_one_attached :photo
  
  PHOTO_COLORS = ["#EA7AF4", "#B43E8F", "#6200B3", "#3B0086", "#290628", "#060F29", "#3EAFB5", "#3EB57D", "#71B53E", "#B5B13E", "#B5B13E"]
  
  before_create do
    self.color = PHOTO_COLORS.sample
  end

  after_initialize :ensure_session_token
  attr_reader :password

  #SPIRE

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    user && user.is_password?(pw) ? user : nil 
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_sesssion_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  # private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
