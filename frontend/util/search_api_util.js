
export const searchItems = name => (
  $.ajax({
    url: `/api/search?q=${name}`
  })
)