require 'rails_helper'

RSpec.describe Desk, type: :model do
  subject(:user) { User.create(username: "Bob Fisher", password: "some_password", email: "fisher@io.com") }
  subject(:desk) { Desk.new(title: "title", author_id: user.id, background_picture: "") }
  
  describe "Desk Creation / Validation" do 
    it { should validate_uniqueness_of(:title) }
  end

  describe "Associations" do
    it { should belong_to(:author) }
  end
end
