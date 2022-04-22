import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../actions/search_actions";
import "./memberList.scss";
import MemberListItem from "./memberListItem";

function MembersList({ data }) {
  const [members, setMembers] = useState([]);

  if (!data.length) return null;

  return (
    <div className="members-container">
      {data.map((member, i) => (
        <MemberListItem member={member} key={member.id + "" + i} />
      ))}
    </div>
  );
}

export default MembersList;
