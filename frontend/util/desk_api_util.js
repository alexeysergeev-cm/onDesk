

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

export const updateDesk = (desk) => (
  $.ajax({
    url: `/api/desks/${desk.id}`,
    method: 'PATCH',
    data: { desk }
  })
)

export const deleteDesk = (deskId) => (
  $.ajax({
    url: `/api/desks/${deskId}`,
    method: 'DELETE',
  })
)

