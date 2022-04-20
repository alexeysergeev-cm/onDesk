namespace :lists do
  task remove_orphan_paper_order_ids: :environment do
    total = 0
    List.find_each do |list|
      list.paper_order.each do |paper_order_id|
        if Paper.find_by(id: paper_order_id).nil?
          list.paper_order.delete(paper_order_id)
          puts "..."
          total += 1
        end
      end
      list.save
    end
    puts "Deleted #{total} orphan paper_order_ids"
  end
end