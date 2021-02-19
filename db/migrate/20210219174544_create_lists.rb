class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false 
      t.integer :desk_id, null: false
      t.integer :author_id, null: false 

      t.timestamps
    end

    add_index :lists, [:title, :author_id]
  end
end
