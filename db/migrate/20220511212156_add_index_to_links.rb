class AddIndexToLinks < ActiveRecord::Migration[5.2]
  def change
    add_index :links, [:url, :slug], unique: true
  end
end
