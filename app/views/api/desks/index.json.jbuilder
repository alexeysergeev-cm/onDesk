
#fetch only what belong to user

Desk.all.each do |desk|
  if desk.author_id == current_user.id     
    json.set! desk.id do 
      json.partial! 'desk', desk: desk
    end
  end
end