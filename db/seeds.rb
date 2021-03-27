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
        username: "Tori Helbert",
        password: "123456",
    },
    { 
        email: "mickey@io.com",
        username: "Mickey Stone",
        password: "123456",
    },
    { 
        email: "lulu@io.com",
        username: "Lulu Thompson",
        password: "123456",
    },
    { 
        email: "charlie@io.com",
        username: "Charlie Simpson",
        password: "123456",
    },
    { 
        email: "robert@io.com",
        username: "Roberto Rodrigez",
        password: "123456",
    },
]
User.create(users)


Desk.destroy_all
desks = [
    {
        title: 'Website Ideas',
        author_id: users[0].id,
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/space.jpg",
    },
    {
        title: 'Mission: Mars',
        author_id: users[1].id,
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/skyscraper.jpeg",
    },
    {
        title: 'Family Trip to Hawaii',
        author_id: users[2].id,
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/shark.jpeg", 
    },
    {
        title: 'Wedding',
        author_id: users[3].id,
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/ocean.jpeg",
    }
]
Desk.create(desks)

DeskMembership.destroy_all
desk_memberships = [
    {
        user_id: users[4].id,
        desk_id: desk[0].id,
    },
    {
        user_id: users[0].id,
        desk_id: desk[1].id,
    },
    {
        user_id: users[0].id,
        desk_id: desk[2].id,,
    },
    {
        user_id: users[0].id,
        desk_id: desk[3].id,,
    },
]
DeskMembership.create(desk_memberships)