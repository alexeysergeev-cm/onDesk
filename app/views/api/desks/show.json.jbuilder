json.desk do 
  json.partial! '/api/desks/desk', desk: @desk
end

json.lists do 
  @desk.lists.to_a.each do |listy|
      json.set! listy.id do 
        json.partial! '/api/lists/list', list: listy     #use listy coz 'list' is a reserved word D:
      end
  end
end

json.papers do 
  @desk.papers.to_a.each do |paper|
      json.set! paper.id do 
        json.partial! '/api/papers/paper', paper: paper
      end
  end
end

json.comments do 
  @desk.comments.to_a.each do |comment|
      json.set! comment.id do 
        json.partial! '/api/comments/comment', comment: comment
      end
  end
end

json.desk_memberships do 
  @desk.desk_memberships.to_a.each do |dm|
    json.set! dm.id do 
      json.partial! '/api/users/user', user: User.find(dm.user_id)
    end
  end
end
