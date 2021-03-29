# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
users = [
    { 
        id: 1,
        email: "tori@io.com",
        username: "Tori Helbert",
        password: "123456",
    },
    { 
        id: 2,
        email: "mickey@io.com",
        username: "Mickey Stone",
        password: "123456",
    },
    { 
        id: 3,
        email: "lulu@io.com",
        username: "Lulu Thompson",
        password: "123456",
    },
    { 
        id: 4,
        email: "charlie@io.com",
        username: "Charlie Simpson",
        password: "123456",
    },
    { 
        id: 5,
        email: "robert@io.com",
        username: "Roberto Rodrigez",
        password: "123456",
    },
]
User.create(users)


Desk.destroy_all
desks = [
    {
        id: 1,
        title: 'Website Ideas',
        author_id: users[0][:id],
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/space.jpg",
        list_order: ["1", "2"],
    },
    {
        id: 2,
        title: 'Mission: Mars',
        author_id: users[1][:id],
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/skyscraper.jpeg",
        list_order: ["3", "4", "5"],
    },
    {
        id: 3,
        title: 'Family Trip to Hawaii',
        author_id: users[2][:id],
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/shark.jpeg", 
        list_order: ["6", "7"],
    },
    {
        id: 4,
        title: 'Wedding',
        author_id: users[3][:id],
        background_picture: "https://ondesk-dev.s3-us-west-1.amazonaws.com/ocean.jpeg",
        list_order: ["8", "9", "10"]
    }
]
Desk.create(desks)

DeskMembership.destroy_all
desk_memberships = [
    {
        id: 1,
        user_id: users[4][:id],
        desk_id: desks[0][:id],
    },
    {
        id: 2,
        user_id: users[0][:id],
        desk_id: desks[1][:id],
    },
    {
        id: 3,
        user_id: users[0][:id],
        desk_id: desks[2][:id],
    },
    {
        id: 4,
        user_id: users[0][:id],
        desk_id: desks[3][:id],
    },
]
DeskMembership.create(desk_memberships)

List.destroy_all
lists = [
    {
        id: 1,
        title: 'Brainstorming',
        desk_id: desks[0][:id],
        author_id: users[0][:id],
        paper_order: ["21", "22"]
    },
    {
        id: 2,
        title: 'Potential Team',
        desk_id: desks[0][:id],
        author_id: users[4][:id],
        paper_order: ["23"],
    },
    {
        id: 3,
        title: 'To Do',
        desk_id: desks[1][:id],
        author_id: users[1][:id],
        paper_order: ["24", "25", "26"],
    },
    {
        id: 4,
        title: 'List of Engineers',
        desk_id: desks[1][:id],
        author_id: users[1][:id],
        paper_order: ["27"],
    },
    {
        id: 5,
        title: 'End Goal',
        desk_id: desks[1][:id],
        author_id: users[0][:id],
        paper_order: ["28"],
    },
    {
        id: 6,
        title: 'Items to Pack',
        desk_id: desks[2][:id],
        author_id: users[2][:id],
        paper_order: ["29", "30"],
    },
    {
        id: 7,
        title: 'Activities',
        desk_id: desks[2][:id],
        author_id: users[0][:id],
        paper_order: ["31", "32", "33"],
    },
    {
        id: 8,
        title: 'Guest List',
        desk_id: desks[3][:id],
        author_id: users[3][:id],
        paper_order: ["34", "35"],
    },
    {
        id: 9,
        title: 'Place to Celebrate',
        desk_id: desks[3][:id],
        author_id: users[3][:id],
        paper_order: ["36", "37"]
    },
    {
        id: 10,
        title: 'Food List',
        desk_id: desks[3][:id],
        author_id: users[3][:id],
        paper_order: ["38", "39", "40"]
    },
]
List.create(lists)


Paper.destroy_all
papers = [
    {
        id: 21,
        title: 'Dating app',
        list_id: lists[0][:id],
        author_id: users[0][:id],
        description: 'Have to watch out for competition. We need a breakthrough idea.',
    },
    {
        id: 22,
        title: 'Construction app',
        list_id: lists[0][:id],
        author_id: users[4][:id],
    },
    {
        id: 23,
        title: 'John Johnson (Data Scientist)',
        list_id: lists[1][:id],
        author_id: users[0][:id],
    },
    {
        id: 24,
        title: 'Recruit Engineers',
        list_id: lists[2][:id],
        author_id: users[1][:id],
    },
    {
        id: 25,
        title: 'Risks of the mission',
        list_id: lists[2][:id],
        author_id: users[0][:id],
        description: 'Posibility of fail and lose billions...',
    },
    {
        id: 26,
        title: 'Rewards of the mission',
        list_id: lists[2][:id],
        author_id: users[1][:id],
        description: 'Contribute to science and humanity. Change the world! I guess change 2 worlds.',
    },
    {
        id: 27,
        title: 'Mike Bright',
        list_id: lists[3][:id],
        author_id: users[1][:id],
    },
    {
        id: 28,
        title: 'Create Life on Mars',
        list_id: lists[4][:id],
        author_id: users[0][:id],
    },
    {
        id: 29,
        title: 'Sandals',
        list_id: lists[5][:id],
        author_id: users[2][:id],
    },
    {
        id: 30,
        title: 'Sun block',
        list_id: lists[5][:id],
        author_id: users[2][:id],
    },
    {
        id: 31,
        title: 'Surf at Waikiki beach',
        list_id: lists[6][:id],
        author_id: users[0][:id],
    },
    {
        id: 32,
        title: 'Cliff jumping',
        list_id: lists[6][:id],
        author_id: users[2][:id],
    },
    {
        id: 33,
        title: 'Hiking',
        list_id: lists[6][:id],
        author_id: users[2][:id],
    },
    {
        id: 34,
        title: 'Dora Smith',
        list_id: lists[7][:id],
        author_id: users[3][:id],
    },
    {
        id: 35,
        title: 'Stephanie Souzicki',
        list_id: lists[7][:id],
        author_id: users[3][:id],
    },
    {
        id: 36,
        title: 'San Francisco',
        list_id: lists[8][:id],
        author_id: users[3][:id],
    },
    {
        id: 37,
        title: 'Hawaii',
        list_id: lists[8][:id],
        author_id: users[0][:id],
    },
    {
        id: 38,
        title: 'Raviolli',
        list_id: lists[9][:id],
        author_id: users[0][:id],
    },
    {
        id: 39,
        title: 'Cheescake',
        list_id: lists[9][:id],
        author_id: users[0][:id],
    },
    {
        id: 40,
        title: 'Sushi',
        list_id: lists[9][:id],
        author_id: users[3][:id],
    },

]
Paper.create(papers)

Comment.destroy_all
comments = [
    {   
        id: 1,
        body: 'This seems interesting.',
        paper_id: papers[1][:id],
        author_id: users[0][:id],
    },
    {   
        id: 2,
        body: 'Very knowledgeable and respectable person.',
        paper_id: papers[2][:id],
        author_id: users[4][:id],
    },
    {   
        id: 3,
        body: 'I love that!',
        paper_id: papers[5][:id],
        author_id: users[1][:id],
    },
    {   
        id: 4,
        body: 'I know couple great spots for that.',
        paper_id: papers[11][:id],
        author_id: users[2][:id],
    },
    {  
        id: 5,
        body: 'I love Sushi!',
        paper_id: papers[19][:id],
        author_id: users[3][:id],
    },
]
Comment.create(comments)