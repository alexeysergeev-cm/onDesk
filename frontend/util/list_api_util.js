
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
    url: `/api/list/${list.id}`,
    method: 'PATCH',
    data: { list }
  })
)

export const deleteList = (listId) => (
  $.ajax({
    url: `/api/list/${listId}`,
    method: 'DELETE',
  })
)