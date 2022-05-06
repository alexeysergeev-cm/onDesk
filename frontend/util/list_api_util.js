export const fetchLists = (desk_id) =>
  $.ajax({
    url: `/api/desks/${desk_id}/lists`,
  });

export const createList = (list) =>
  $.ajax({
    url: "/api/lists",
    method: "POST",
    data: { list },
  });

export const updateList = (list) =>
  $.ajax({
    url: `/api/lists/${list.id}`,
    method: "PATCH",
    data: { list },
  });

export const deleteList = (listId) =>
  $.ajax({
    url: `/api/lists/${listId}`,
    method: "DELETE",
  });

export const updateTwoLists = (listId, payload) =>
  $.ajax({
    url: `/api/lists/${listId}/update_two_lists`,
    method: "PATCH",
    data: { payload },
  });
