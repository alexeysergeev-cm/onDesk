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
        desk_id: desks[0].id,
    },
    {
        user_id: users[0].id,
        desk_id: desks[1].id,
    },
    {
        user_id: users[0].id,
        desk_id: desks[2].id,,
    },
    {
        user_id: users[0].id,
        desk_id: desks[3].id,
    },
]
DeskMembership.create(desk_memberships)

List.destroy_all
lists = [
    {
        title: 'Brainstorming',
        desk_id: desks[0].id,
        author_id: users[0].id,
    },
    {
        title: 'Potential Team',
        desk_id: desks[0].id,
        author_id: users[4].id,
    },
    {
        title: 'To Do',
        desk_id: desks[1].id,
        author_id: users[1].id,
    },
    {
        title: 'List of Engineers',
        desk_id: desks[1].id,
        author_id: users[1].id,
    },
    {
        title: 'End Goal',
        desk_id: desks[1].id,
        author_id: users[0].id,
    },
    {
        title: 'Items to Pack',
        desk_id: desks[2].id,
        author_id: users[2].id,
    },
    {
        title: 'Activities',
        desk_id: desks[2].id,
        author_id: users[0].id,
    },
    {
        title: 'Guest List',
        desk_id: desks[3].id,
        author_id: users[3].id,
    },
    {
        title: 'Place to Celebrate',
        desk_id: desks[3].id,
        author_id: users[3].id,
    },
    {
        title: 'Food List',
        desk_id: desks[3].id,
        author_id: users[3].id,
    },
]
List.create(lists)

Paper.destroy_all
papers = [
    {
        title: 'Dating app',
        list_id: lists[0].id,
        author_id: users[0].id,
        description: 'Have to watch out for competition. We need a breakthrough idea.'
    },
    {
        title: 'Construction app',
        list_id: lists[0].id,
        author_id: users[4].id,
    },
    {
        title: 'John Johnson (Data Scientist)',
        list_id: lists[1].id,
        author_id: users[0].id,
    },
    {
        title: 'Recruit Engineers',
        list_id: lists[2].id,
        author_id: users[1].id,
    },
    {
        title: 'Risks of the mission',
        list_id: lists[2].id,
        author_id: users[0].id,
        description: 'Posibility of fail and lose billions...'
    },
    {
        title: 'Rewards of the mission',
        list_id: lists[2].id,
        author_id: users[1].id,
        description: 'Contribute to science and humanity. Change the world! I guess change 2 worlds.'
    },
    {
        title: 'Mike Tison',
        list_id: lists[3].id,
        author_id: users[1].id,
    },
    {
        title: 'Create Life on Mars',
        list_id: lists[4].id,
        author_id: users[0].id,
    },
    {
        title: 'Sandals',
        list_id: lists[5].id,
        author_id: users[2].id,
    },
    {
        title: 'Sun block',
        list_id: lists[5].id,
        author_id: users[2].id,
    },
    {
        title: 'Surf at Waiki beach',
        list_id: lists[6].id,
        author_id: users[0].id,
    },
    {
        title: 'Cliff jumping',
        list_id: lists[6].id,
        author_id: users[2].id,
    },
    {
        title: 'Hiking',
        list_id: lists[6].id,
        author_id: users[2].id,
    },
    {
        title: 'Dora Smith',
        list_id: lists[7].id,
        author_id: users[3].id,
    },
    {
        title: 'Stephanie Souzicki',
        list_id: lists[7].id,
        author_id: users[3].id,
    },
    {
        title: 'San Francisco',
        list_id: lists[8].id,
        author_id: users[3].id,
    },
    {
        title: 'Hawaii',
        list_id: lists[8].id,
        author_id: users[0].id,
    },
    {
        title: 'Raviolli',
        list_id: lists[9].id,
        author_id: users[0].id,
    },
    {
        title: 'Cheescake',
        list_id: lists[9].id,
        author_id: users[0].id,
    },
    {
        title: 'Sushi',
        list_id: lists[9].id,
        author_id: users[3].id,
    },

]
Paper.create(papers)

Comment.destroy_all
comments = [
    {
        body: 'This seems interesting',
        paper_id: papers[1].id,
        author_id: users[0].id,
    },
    {
        body: 'Very knoledgable and respectable person',
        paper_id: papers[2].id,
        author_id: users[4].id,
    },
    {
        body: 'I love that!',
        paper_id: papers[5].id,
        author_id: users[1].id,
    },
    {
        body: 'I know couple great spots for that',
        paper_id: papers[11].id,
        author_id: users[2].id,
    },
    {
        body: 'I love Sushi!',
        paper_id: papers[19].id,
        author_id: users[3].id,
    },
]
Comment.create(comments)