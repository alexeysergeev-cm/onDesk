@desks.each do |desk|
  json.set! desk.id do 
    json.partial! 'desk', desk: desk
  end
end