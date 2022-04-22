export const createMembership = (desk_membership) => (
  $.ajax({
    url: `/api/desk_memberships`,
    method: 'POST',
    data: { desk_membership }
  })
)

export const deleteMembership = (deskMembershipId) =>
  $.ajax({
    url: `/api/desk_memberships/${deskMembershipId}`,
    method: "DELETE",
  });

