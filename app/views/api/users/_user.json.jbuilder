if user.photo.attached? 
  json.extract! user, :id, :username, :email, :color
  json.photoUrl url_for(user.photo)
else
  json.extract! user, :id, :username, :email, :color
end