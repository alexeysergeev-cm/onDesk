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

json.papers do 
  debugger
  @desk.papers.to_a.each do |paper|
      json.set! paper.id do 
        # json.partial! '/api/lists/list', list: list
        json.extract! paper, :id, :title, :list_id, :author_id
      end
  end
end