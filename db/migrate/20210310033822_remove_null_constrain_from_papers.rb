class RemoveNullConstrainFromPapers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :papers, :description, true
  end
end
