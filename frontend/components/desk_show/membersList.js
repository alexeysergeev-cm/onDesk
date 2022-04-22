import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../actions/search_actions";
import { Link } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";
import "./memberList.scss";
import classnames from "classnames";

function MembersList({ data }) {
  const [members, setMembers] = useState([]);

  if (!data.length) return null;
  
  return (  
    <div className="members-container">
      {data.map((member, i) => {
        return (
          <button
            key={member.id + "" + i}
            className={classnames("member-icon", {
              "with-image": !!member.photoUrl,
            })}
            style={{
              backgroundColor: member.color,
              backgroundImage: member.photoUrl ? `url(${member.photoUrl})` : "",
            }}
          >
            {!member.photoUrl ? (
              <>
                {member.username?.split(" ")[0][0] +
                  member.username?.split(" ")[1][0]}
              </>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default MembersList;
