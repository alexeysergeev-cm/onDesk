import { useRef, useState } from "react";
import classnames from "classnames";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function MemberListItem({ member }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  const ref = useRef();

  const showInfo = (member) => {
    if (!isShowingInfo) return;
    return (
      <div className="tile is-parent is-vertical member-info-parent">
        <article className="tile is-child notification is-success member-info">
          <p className="content">{member.username}</p>
          <p className="content">{member.email}</p>
        </article>
      </div>
    );
  };

  useOnClickOutside(ref, () => setIsShowingInfo(false));

  return (
    <>
      <button
        className={classnames("member-icon", {
          "with-image": !!member.photoUrl,
        })}
        style={{
          backgroundColor: member.color,
          backgroundImage: member.photoUrl ? `url(${member.photoUrl})` : "",
        }}
        onClick={() => setIsShowingInfo(!isShowingInfo)}
        ref={ref}
      >
        {!member.photoUrl ? (
          <>
            {member.username?.split(" ")[0][0] +
              member.username?.split(" ")[1][0]}
          </>
        ) : null}
      </button>
      {showInfo(member)}
    </>
  );
}

export default MemberListItem;
