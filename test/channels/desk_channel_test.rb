require "test_helper"

class DeskChannelTest < ApplicationCable::Channel
  test "subscribes and stream for desk" do
    # Simulate a subscription creation by calling `subscribe`
    # subscribe desk: "1"

    # # You can access the Channel object via `subscription` in tests
    # assert subscription.confirmed?
    # assert_has_stream "desk_1"
  end
end