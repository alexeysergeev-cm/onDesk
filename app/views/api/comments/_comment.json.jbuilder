json.extract! comment, :id, :body, :paper_id, :author_id
json.username  User.find_by(id: comment.author_id).username