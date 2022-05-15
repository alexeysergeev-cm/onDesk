require 'rails_helper'

RSpec.describe Desk, type: :model do
  # Validations
  # Associations
  # Class methods
  # Errors messages

  subject(:desk) { build(:desk) }
  
  describe "Validations" do 
    it { should validate_presence_of(:title) }
    it { should validate_uniqueness_of(:title) }
    
    it "does not create a desk with the same title" do 
      desk2 = Desk.new(title: "Hello World", author_id: 1)
      expect(desk2.valid?).to be false
    end
  end

  describe "Associations" do
    it { should belong_to(:author) }
    it { should have_many(:lists) }
    it { should have_many(:papers).through(:lists) }
    it { should have_many(:comments).through(:papers) }
    it { should have_many(:desk_memberships) }
  end

  describe "Class methods" do 
    describe "#set_background_picture" do 
      it "should assign background picture if one is not passed in params" do
        desk_with_no_pic = Desk.create(title: "Testing", author_id: 2)
        desk_with_no_pic.set_background_picture
        expect(desk_with_no_pic.background_picture).not_to be nil
      end
    end
  end
end
