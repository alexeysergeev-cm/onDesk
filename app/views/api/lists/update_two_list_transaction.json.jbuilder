
json.data do 
  json.lists do
    json.set! @source_list.id do 
      json.partial! "list", list: @source_list
    end
    json.set! @destination_list.id do 
      json.partial! "list", list: @destination_list
    end
  end
  json.paper do
    json.partial! "api/papers/paper", paper: @paper
  end
end

