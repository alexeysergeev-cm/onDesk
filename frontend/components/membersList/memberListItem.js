import { useCallback, useRef, useState } from "react";
import classnames from "classnames";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { deleteMembership } from "../../actions/desk_memberships_actions";
// import { useNavigate } from "react-router-dom"; //v6
import { useHistory } from "react-router-dom"; //v5

function MemberListItem({ member, index, membershipIds, currUserId }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef();

  const me = currUserId === member.id;

  const kickUser = useCallback(() => {
    const id = membershipIds[index];
    if (id === undefined) return;
    dispatch(deleteMembership(id));
    if (me) {
      history.push("/");
    }
  }, [dispatch, membershipIds, me, history, index]);

  const showInfo = useCallback(() => {
    return (
      <div className="tile is-parent is-vertical member-info-parent">
        <article className="tile is-child notification is-success member-info">
          {me && <div className="button is-small is-info">ME</div>}
          <p className="content">{member.username}</p>
          <p className="content">{member.email}</p>
          <div className="button is-danger" onClick={() => kickUser()}>
            {me ? <div>Leave board</div> : <div>Remove member</div>}
          </div>
        </article>
      </div>
    );
  }, [member, kickUser, me]);

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
        {isShowingInfo && showInfo()}
      </button>
    </>
  );
}

export default MemberListItem;
