export default class Selectors {
  constructor() {}

  getCurrentUser = ({ entities, session }) => {
    return entities.users[session.currentUserId] || null;
  };

  geCurrentUserPhoto = ({ entities, session }) => {
    return entities.users[session.currentUserId].photoUrl || "";
  };

  getDeskTitle = ({ desks }, deskId) => desks[deskId] && desks[deskId].title;

  getDeskMembers = (deskMembers) => Object.values(deskMembers);

  getDeskMembershipIds = (deskMembers) => Object.keys(deskMembers);

  getObjectValues = (object) => Object.values(object);
  getObjectKeys = (object) => Object.keys(object);
}

export const selectors = new Selectors();
