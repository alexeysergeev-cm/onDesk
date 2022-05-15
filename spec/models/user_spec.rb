require 'rails_helper'


RSpec.describe User, :type => :model do
  # validations
  # Associations
  # Class methods
  # Errors messages

  subject(:user) { User.new(username: "Jacky Chan", password: "123456", email: "chan@io.com") }

  describe "Validations" do 
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end
  
    it "is not valid without a username" do
      user.username = nil
      expect(user).to_not be_valid
    end

    it "is not valid without a email" do
      user.email = nil
      expect(user).to_not be_valid
    end
  
    it "is not valid without a password" do
      user = build(:user, email: nil)
      expect(user).to_not be_valid
    end

    it "is invalid with a duplicate email address" do
      db_user = create(:user)
      user = build(:user, email: db_user.email)
      user.valid?
      expect(user.errors[:email]).to include("has already been taken")
    end
  end

  describe "Associations" do
    it { should have_many(:desks) }
    it { should have_many(:desk_memberships)}
  end
end