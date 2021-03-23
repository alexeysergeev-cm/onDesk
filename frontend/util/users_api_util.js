

export const fetchUser = (email) => (
  $.ajax({
    url: `/api/users`,
    data: {email}
  })
)

