require 'rails_helper'

# What to test?
# status codes and responses in various conditions
# Valid and invalid Params

# Rspec rails api
# Navigation
#  * get
#  * pos
#  * patch
#  * delete
# Assertion
#  * render_template
#  * redirect_to
#  * have_http_status, be_success


RSpec.describe Api::DesksController, type: :controller do 
  let(:user) { create(:user) }

  describe "GET #index" do 
    it "respodns successfully with an HTTP 200 status code" do
      login user
      get :index
      p response.redirection?
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "renders the show template"

    context "if the desk does not exists" do
      it "is not a success"
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "renders a new template"
    end

    context "with valid params" do
      it "return 400 status code"
    end
  end
end