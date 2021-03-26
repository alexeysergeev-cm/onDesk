json.partial! 'api/papers/paper', paper: @paper


# json.comments do 
#   @paper.comments.to_a.each do |comment|
#       json.set! comment.id do 
#         json.partial! '/api/comments/comment', comment: comment
#         # json.extract! comment, :id, :body, :author_id, :paper_id
#       end
#   end
# end