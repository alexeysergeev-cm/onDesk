import { useState } from "react";
import MemberListItem from "./memberListItem";
import "./memberList.scss";

function MembersList({ data, membershipIds, currUserId }) {
  // const [members, setMembers] = useState([]);

  if (!data.length) return null;

  return (
    <div className="members-container">
      {data.map((member, i) => (
        <MemberListItem
          member={member}
          key={member.id + "" + i}
          index={i}
          membershipIds={membershipIds}
          currUserId={currUserId}
        />
      ))}
    </div>
  );
}

export default MembersList;
