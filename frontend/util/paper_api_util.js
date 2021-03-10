

export const createPaper = (paper) => (
  $.ajax({
    url: '/api/papers',
    method: 'POST',
    data: { paper }
  })
)

export const updatePaper = (paper) => (
  $.ajax({
    url: `/api/papers/${paper.id}`,
    method: 'PATCH',
    data: { paper }
  })
)

export const deletePaper = (paperId) => (
  $.ajax({
    url: `/api/papers/${paperId}`,
    method: 'DELETE',
  })
)