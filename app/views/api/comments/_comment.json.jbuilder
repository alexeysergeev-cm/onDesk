json.extract! comment, :id, :body, :paper_id, :author_id
json.time comment.created_at.to_date
json.username  User.find_by(id: comment.author_id).username