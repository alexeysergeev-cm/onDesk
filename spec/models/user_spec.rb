require 'rails_helper'


RSpec.describe User, :type => :model do
  # validations
  # Associations
  # Class methods
  # Errors messages
  subject(:db_user) { create(:user) }
  subject(:user) { build(:user) }

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
      pw_user = User.new(email: "hello@io.com", username: "hello me")
      expect(pw_user).to_not be_valid
    end

    it "is invalid with a duplicate email address" do
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