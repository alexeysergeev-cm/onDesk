namespace :desks do 

  task add_background_pictures: :environment do 
    total = 0
    
    Desk.find_each do |desk|
      if desk.background_picture.length == 0
        desk.background_picture = Desk::DEFAULT_BACKGROUND_URL
        desk.save
        total += 1
      end
    end

    puts "------------"
    puts "added #{total} background pictures!"
    puts "------------"
    # Rails.logger.info "added #{total} background pictures!"  - > Better practice than puts
  end
end 