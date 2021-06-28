
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
      json.id list.desk_id
      json.title list.title
    end
  end
end

if !@papers.nil?
  json.papers do
    json.array!(@papers) do |paper|
      #need to get desk id!
      List.all.each do |list|
        if list.id == paper.list_id
          json.id list.desk_id
        end
      end
      
      json.title paper.title
    end
  end
end