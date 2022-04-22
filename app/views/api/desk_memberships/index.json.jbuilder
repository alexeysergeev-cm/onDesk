
json.desk_memberships do 
  @desk.desk_memberships.to_a.each do |dm|
    json.set! dm.id do 
      json.partial! '/api/users/user', user: User.find(dm.user_id)
    end
  end
end