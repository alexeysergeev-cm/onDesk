class AddListOrderToDesk < ActiveRecord::Migration[5.2]
  def change
    add_column :desks, :list_order, :string, array: true, default: []
  end
end
