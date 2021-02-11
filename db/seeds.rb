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
        username: "mickey",
        password: "123456",
        email: "mickey@io.com"
    },
    { 
        username: "lulu",
        password: "123456",
        email: "lulu@io.com"
    },
    { 
        username: "charlie",
        password: "123456",
        email: "charlie@io.com"
    },
    { 
        username: "robert",
        password: "123456",
        email: "robert@io.com"
    },
    { 
        username: "tori",
        password: "123456",
        email: "tori@io.com"
    },
]
User.create(users)