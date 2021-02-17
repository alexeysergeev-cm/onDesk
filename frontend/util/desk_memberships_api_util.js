

export const createMembership = (desk_membership) => (
  $.ajax({
    url: `/api/desk_memberships`,
    method: 'POST',
    data: { desk_membership }
  })
)


// export const deskMembers = (members) => (
//   $.ajax({
//     url: 
//   })
// )