json.desk do 
  json.partial! '/api/desks/desk', desk: @desk
end

json.lists do 
  @desk.lists.each do |list|
    json.set! list.id do 
      json.extract! list, :id, :title, :desk_id, :author_id
    end
  end
end
