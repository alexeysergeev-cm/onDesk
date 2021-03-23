if user.photo.attached? 
  json.extract! user, :id, :username, :email
  json.photoUrl url_for(user.photo)
else
  json.extract! user, :id, :username, :email
end