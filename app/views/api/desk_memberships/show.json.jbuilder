json.set! :new_member do 
  json.partial! 'api/users/user', user: @new_member
end

json.set! :desk_membership do
  json.extract! @desk_membership, :id, :user_id, :desk_id
end
