require 'date'
class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :paper_id, :author_id, :username, :time

  def username
    object.author.username
  end

  def time
    object.created_at.to_date
  end
end
