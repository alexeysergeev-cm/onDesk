
export const fetchLists = () => (
  $.ajax({
    url: '/api/lists',
  })
)

export const createList = (list) => (
  $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: { list }
  })
)

export const updateList = (list) => (
  $.ajax({
    url: `/api/lists/${list.id}`,
    method: 'PATCH',
    data: { list }
  })
)

export const deleteList = (listId) => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'DELETE',
  })
)