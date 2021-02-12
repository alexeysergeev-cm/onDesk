

export const fetchDesks = () => (
  $.ajax({
    url: '/api/desks',
    error: (err) => console.log(err) // for debugging?
  })
)

export const createDesk = (desk) => (
  $.ajax({
    url: '/api/desks',
    method: 'POST',
    data: { desk }
  })
)
