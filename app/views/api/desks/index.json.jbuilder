DeskMembership.find_each do |membership|
  if membership.user_id == current_user.id
    desk = Desk.find(membership.desk_id)
    json.set! desk.id do 
      json.partial! 'desk', desk: desk
    end
  end
end