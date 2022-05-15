FactoryBot.define do 
  factory :user do
    username { Faker::Name.unique.name }
    email { Faker::Internet.free_email }
    password  { Faker::Internet.password }
  end 
end