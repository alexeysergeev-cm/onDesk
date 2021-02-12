class AddIndexToDesks < ActiveRecord::Migration[5.2]
  def change
    add_index :desks, :title
  end
end
