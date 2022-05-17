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

    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should have_one_attached(:photo) }
  end

  describe "Associations" do
    it { should have_many(:desks) }
    it { should have_many(:desk_memberships)}
  end

  describe "Class methods" do 
    describe "#is_password?" do 
      context "should accept a password" do
        let(:is_password_func) {
          -> (pw) { 
            return true if db_user.is_password?(pw)
            return false
          }
        }

        it "and return TRUE if password is correct" do
          result = is_password_func.call(db_user.password)
          expect(result).to be true
        end
        
        it "and return FALSE if password is incorrect" do
          result = is_password_func.call("hello")
          expect(result).to be false
        end
      end
    end
  end 
end