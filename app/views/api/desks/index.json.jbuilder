
#fetch only what belong to user
Desk.all.each do |desk|
  if desk.author_id == current_user.id     
    json.set! desk.id do 
      json.partial! 'desk', desk: desk
    end
  end
end

# fetch shared desks 
DeskMembership.all.each do |membership|
  if membership.user_id == current_user.id
    Desk.all.each do |desk|
      if membership.desk_id == desk.id 
        json.set! desk.id do 
          json.partial! 'desk', desk: desk
        end
      end
    end
  end
end