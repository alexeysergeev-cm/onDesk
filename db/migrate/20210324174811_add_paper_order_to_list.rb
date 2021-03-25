class AddPaperOrderToList < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :paper_order, :string, array: true, default: []
  end
end
