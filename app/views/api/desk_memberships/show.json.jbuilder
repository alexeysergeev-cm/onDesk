json.set! :member do 
  if @member
    json.partial! 'api/users/user', user: @member
  end
end

json.set! :desk_membership do
  json.extract! @desk_membership, :id, :user_id, :desk_id
end
