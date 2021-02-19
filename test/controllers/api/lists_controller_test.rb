require 'test_helper'

class Api::ListsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_lists_create_url
    assert_response :success
  end

  test "should get update" do
    get api_lists_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_lists_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_lists_index_url
    assert_response :success
  end

end
