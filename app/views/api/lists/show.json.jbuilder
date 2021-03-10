json.partial! 'api/lists/list', list: @list


json.papers do 
  @list.papers.to_a.each do |paper|
    # debugger
      json.set! paper.id do 
        # json.partial! '/api/lists/list', list: list
        json.extract! paper, :id, :title, :list_id, :author_id
      end
  end
end