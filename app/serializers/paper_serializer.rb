class PaperSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :list_id, :author_id
end
