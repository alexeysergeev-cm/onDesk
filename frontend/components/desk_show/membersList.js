import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../actions/search_actions";
import { Link } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";
import "./memberList.scss";
import classnames from "classnames"

function MembersList({ data }) {
  const [members, setMembers] = useState([]);

  if (!data.length) return null;

  return (
    <>
      {data.map((member) => {
        return (
          <button
            key={member.id}
            className={classnames("button is-info is-light member-icon", {
              "with-image": !!member.photoUrl,
            })}
            style={{
              backgroundColor: member.color,
              backgroundImage: member.photoUrl ? `url(${member.photoUrl})` : "",
            }}
          >
            {!member.photoUrl ? (
              <>
                {member.username.split(" ")[0][0] +
                  member.username.split(" ")[1][0]}
              </>
            ) : null}
          </button>
        );
      })}
    </>
  );
}

export default MembersList;
