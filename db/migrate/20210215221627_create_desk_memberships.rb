class CreateDeskMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :desk_memberships do |t|
      t.integer 'user_id', null: false
      t.integer 'desk_id', null: false

      t.timestamps
    end
    add_index :desk_memberships, [:user_id, :desk_id]
  end
end
