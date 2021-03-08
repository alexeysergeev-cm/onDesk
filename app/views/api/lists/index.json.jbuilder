

#search lists belonging to current desk
# Desk.all.each do |desk|
#   if list.desk_id == desk.id     
#     json.set! list.id do 
#       json.partial! 'list', list: list
#     end
#   end  
# end

List.all.each do |list|
  json.set! list.id do
    json.partial! 'list', list: list
  end
end