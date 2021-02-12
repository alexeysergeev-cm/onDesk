class User < ApplicationRecord
  validates :session_token, :email, presence: true, uniqueness: true
  validates :username, presence: true  #change to full name
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :desks,
    foreign_key: :author_id

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
