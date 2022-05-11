class Link < ApplicationRecord
  validates :url, presence: true, uniqueness: true
  validates :url, format: URI::regexp(%w[http https])
  validates :slug, presence: true, uniqueness: true

  before_validation :generate_slug, on: [:create]

  def generate_slug
    slug = SecureRandom.urlsafe_base64[0..1]
    if Link.find_by_slug(slug).nil?
      self.slug = slug
    else 
      generate_slug
    end
    true
  end

  def short
    Rails.application.routes.url_helpers.slug_url(slug: self.slug)
  end 
end