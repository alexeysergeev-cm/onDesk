export const selectDesk = ({ desks }, deskId) => {
  if (desks[deskId] !== undefined){
    return desks[deskId].title
  }
}