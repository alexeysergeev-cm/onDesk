
# if !@desks.nil? 
#   @desks.each do |desk|
#     debugger
#     json.extract! desk, :id, :title, :author_id, :background_picture, :list_order
#   end
# end

if !@desks.nil?
  json.desks do
    json.array!(@desks) do |desk|
      json.id desk.id
      json.title desk.title
    end
  end
end

if !@lists.nil?
  json.lists do
    json.array!(@lists) do |list|
      json.id list.id
      json.title list.title
    end
  end
end

if !@papers.nil?
  json.papers do
    json.array!(@papers) do |paper|
      json.id paper.id
      json.title paper.title
    end
  end
end