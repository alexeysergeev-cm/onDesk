class AddColumnToDesk < ActiveRecord::Migration[5.2]
  def change
    add_column :desks, :background_picture, :string
  end
end
