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
        email: "tori@io.com",
        username: "tori",
        password: "123456",
    },
    { 
        email: "mickey@io.com",
        username: "mickey",
        password: "123456",
    },
    { 
        email: "lulu@io.com",
        username: "lulu",
        password: "123456",
    },
    { 
        email: "charlie@io.com",
        username: "charlie",
        password: "123456",
    },
    { 
        email: "robert@io.com",
        username: "robert",
        password: "123456",
    },
]
User.create(users)


Desk.destroy_all
desks = [
    {
        title: 'Ideas',
        author_id: '50',
    },
    {
        title: 'Fly to Mars',
        author_id: '50',
    },
    {
        title: 'Plan family trip to hawaii',
        author_id: '50',
    },
    {
        title: 'Hire engineers',
        author_id: '50',
    }
]
Desk.create(desks)