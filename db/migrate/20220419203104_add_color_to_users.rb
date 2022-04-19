class AddColorToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :color, :string, default: User::PHOTO_COLORS.sample
  end
end
