

export const fetchDesks = () => (
  $.ajax({
    url: '/api/desks',
  })
)

export const fetchDesk = (id) => (
  $.ajax({
    url: `/api/desks/${id}`,
  })
)

export const createDesk = (desk) => (
  $.ajax({
    url: '/api/desks',
    method: 'POST',
    data: { desk }
  })
)
