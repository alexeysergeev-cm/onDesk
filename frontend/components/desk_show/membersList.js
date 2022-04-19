import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../actions/search_actions";
import { Link } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";
import './memberList.scss'

function MembersList({ data }) {
  const [members, setMembers] = useState([]);

  if (!data.length) return null;

  return (
    <>
      {data.map((member) => {
        return (
          <button
            key={member.id}
            className="button is-info is-light member-icon"
          >
            {member.username}
          </button>
        );
      })}
    </>
  );
}

export default MembersList;
