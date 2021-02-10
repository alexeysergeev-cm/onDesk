# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 

users =[
    { 
        username: "user1",
        password: "123456",
        email: "us@io.com"
    },
    { 
        username: "user2",
        password: "123456",
        email: "asd@gmail.com"
    },
    { 
        username: "user3",
        password: "123456",
        email: "ops@io.com"
    },
    { 
        username: "user4",
        password: "123456",
        email: "haho@io.com"
    },
    { 
        username: "tori",
        password: "123456",
        email: "torr@io.com"
    },
]
User.create(users)