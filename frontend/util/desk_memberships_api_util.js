

export const createMemebership = (payload) => (
  $.ajax({
    url: `/api/desk_memberships`,
    method: 'POST',
    data: { payload }
  })
)

