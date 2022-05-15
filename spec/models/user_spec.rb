require 'rails_helper'


RSpec.describe User, :type => :model do
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
      user = User.new(username: "Jacky Chan", email: "chan@io.com")
      expect(user).to_not be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:desks) }
    it { should have_many(:desk_memberships)}
  end
end