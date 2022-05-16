FactoryBot.define do 
  factory :desk do
    title { Faker::Book.title }
    author_id  { Faker::Number.digit }
  end 
end