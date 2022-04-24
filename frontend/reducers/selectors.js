export default class Selectors {
  constructor() {}

  getDeskTitle = ({ desks }, deskId) => desks[deskId] && desks[deskId].title;

  getDeskMembers = (deskMembers) => Object.values(deskMembers);

  getDeskMembershipIds = (deskMembers) => Object.keys(deskMembers);
}

export const selectors = new Selectors();