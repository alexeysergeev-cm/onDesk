


//fetch User 

// '/api/users?query=${email}'
//  

export const fetchUser = (email) => (
  $.ajax({
    url: `/api/users`,
    data: {email}
  })
)

