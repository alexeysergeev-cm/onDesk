namespace :users do
  task populate_colors: :environment do
    User.find_each do |user|
      user.update(color: User::PHOTO_COLORS.sample)
    end
  end
end