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
  let(:desk) { create(:desk, author_id: user.id) }
  
  describe "GET #index" do 
    context "if user logged in" do 
      it "reponds successfully with an HTTP 200 status code" do
        login user
        get :index, as: :json
        expect(response).to be_successful
        expect(response).to have_http_status 200
      end
    end

    context "if user NOT logged in" do 
      it "should redirect to login page" do 
        request = get :index, as: :json
        expect(request).to redirect_to(api_session_url)
        expect(response.redirect_url).to eq(api_session_url)
      end
    end
  end

  describe "GET #show" do
    context "when the desk exists" do
      it "renders the show.json.jbuilder and return data in json" do
        login user
        get :show, params: { id: desk.id }, as: :json
        expect(response).to render_template(:show)
        expect(response).to have_http_status 200
      end
    end

    context "if the desk does not exists" do
      it "is not a success" do 
        begin
          get :show, params: { id: -1 }
        rescue
          ActiveRecord.RecordNotFound
        end
        expect(response).not_to render_template(:show)
      end
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "renders a show template" do 
        login user
        post :create, params: { title: "Awesome", author_id: user.id }, as: :json
        expect(response).to render_template(:show)
      end
    end

    context "with invalid params" do
      it "return 422 status code" do 
        login user
        post :create, params: { title: "Planning" }, as: :json
        expect(response).to have_http_status(422)
      end
    end
  end
end