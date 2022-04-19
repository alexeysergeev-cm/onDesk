
json.desks do
  json.array!(@desks) do |desk|
    json.id desk.id
    json.title desk.title
  end
end

json.lists do
  json.array!(@lists) do |list|
    json.id list.desk_id
    json.title list.title
  end
end

json.papers do
  json.array!(@papers) do |paper|
    json.id List.find(paper.list_id).desk_id
    json.title paper.title
  end
end
