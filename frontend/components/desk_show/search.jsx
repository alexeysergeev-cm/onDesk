import { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";

function Search({ fetchUser, createMembership, deskId }) {
  const [query, setQuery] = useState("");
  const [successInvite, setSuccessInvite] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!query.length) return;

      fetchUser(query)
        .then((data) => data.user.id)
        .then((id) =>
          createMembership({
            user_id: id,
            desk_id: deskId,
          })
        )
        .then(() => setSuccessInvite("Success, user invited!"))
        .fail((err) => setError(err.responseJSON))
        .then(() => setQuery(""));

      setTimeout(() => (setSuccessInvite(""), setError("")), 5000);
    },
    [query, fetchUser, createMembership, deskId]
  );

  const handleInputChange = useCallback(
    (e) => {
      setQuery(e.currentTarget.value);
    },
    [setQuery]
  );

  return (
    <div className="searchForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          className="input invite-input"
          placeholder="Email"
          value={query}
          onChange={(e) => handleInputChange(e)}
          ref={ref}
        />
        <button className="button is-link is-outlined">Share</button>
      </form>
      {(error || successInvite) && (
        <>
          <div className="horizontal-divider"></div>
          <div className="render-result">
            <div
              className={classnames("invite-errors", {
                "err-on": error.length,
              })}
            >
              {error}
            </div>
            <div
              className={classnames("invite-success", {
                "suc-on": successInvite.length,
              })}
            >
              {successInvite}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
