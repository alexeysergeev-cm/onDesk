json.desk do 
  json.partial! '/api/desks/desk', desk: @desk
end

json.lists do 
  @desk.lists.to_a.each do |listy|
    # debugger
      json.set! listy.id do 
        # json.partial! '/api/lists/list', list: list
        json.extract! listy, :id, :title, :desk_id, :author_id
      end
  end
end