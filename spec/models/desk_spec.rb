require 'rails_helper'

RSpec.describe Desk, type: :model do
  # let(:user) { User.create(username: "Bob Fisher", password: "some_password", email: "fisher@io.com") }
  
  
  describe "Desk Creation / Validation" do 
    # subject(:desk) { Desk.new(title: "title", author_id: user.id, background_picture: "") }
    it { should validate_uniqueness_of(:title) }

    it "does not create a desk with the same title" do 
      # Desk.create(title: "title1", author_id: author.id, background_picture: "")
      # desk2 = Desk.new(title: "title1", author_id: author.id, background_picture: "")
      # puts Desk.all
      # puts desk2.valid?

      # expect(desk2.errors[:title]).to include("be blank")
    end
  end

  describe "Associations" do
    it { should belong_to(:author) }
  end
end
