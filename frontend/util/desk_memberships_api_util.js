

export const createMemebership = (desk_membership) => (
  $.ajax({
    url: `/api/desk_memberships`,
    method: 'POST',
    data: { desk_membership }
  })
)

