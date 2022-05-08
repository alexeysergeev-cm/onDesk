class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :color, :photoUrl

  def photoUrl 
    object.photo.service_url if object.photo.attached?  
  end
end
