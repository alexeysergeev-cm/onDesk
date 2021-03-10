class CreatePapers < ActiveRecord::Migration[5.2]
  def change
    create_table :papers do |t|
      t.string :title, null: false 
      t.text :description, null: false
      t.integer :list_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :papers, [:title, :author_id]
  end
end
