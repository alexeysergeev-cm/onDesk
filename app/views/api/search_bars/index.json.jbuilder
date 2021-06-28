
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