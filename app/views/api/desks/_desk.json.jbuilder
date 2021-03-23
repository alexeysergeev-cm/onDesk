# json.extract! desk, :id, :title, :author_id
# json.photoUrl url_for(desk.background_picture)


if desk.background_picture.attached? 
    json.extract! desk, :id, :title, :author_id
    json.backgroundPictureUrl url_for(desk.background_picture)
else
    json.extract! desk, :id, :title, :author_id
end