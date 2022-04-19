namespace :desk_memberships do
  task add_author_to_memberships: :environment do
    desks = Desk.all

    desks.find_each do |desk| 
      desk_id = desk.id
      author_id = desk.author_id

      dm = DeskMembership.new(user_id: author_id, desk_id: desk_id)
      dm.save!
    end
  end
end
