
@lists.to_a.each do |list|
  json.set! list.id do 
    json.partial! 'list', list: list
  end
end
