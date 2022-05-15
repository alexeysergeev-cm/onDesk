require 'rails_helper'

RSpec.describe Desk, type: :model do
  
  describe "Associations" do
    it { should belong_to(:author) }
  end
end
