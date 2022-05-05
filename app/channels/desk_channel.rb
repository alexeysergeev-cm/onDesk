class DeskChannel < ApplicationCable::Channel
  def subscribed
    @desk = Desk.find(params[:desk_id])
    stream_for @desk
  end

  def unsubscribed
    puts "unsubscribing from desk => #{@desk} ------------------------------------>>>"
    stop_all_streams
  end
end

