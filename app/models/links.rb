class Link < ApplicationRecord
  validates_presence_of :url
  validates :url, format: URI::regexp(%w[http https])
  validates_uniqueness_of :slug

  before_create :generate_slug
  
  def generate_slug
    slug = SecureRandom.urlsafe_base64(5)

    if Link.find_by_slug(slug)
      generate_slug
    else 
      self.slug = slug
    end
  end
end