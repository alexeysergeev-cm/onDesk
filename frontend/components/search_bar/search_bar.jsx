import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../../actions/search_actions";
import { Link } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";

const searchBar = () => {
  const [word, setWord] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const queryResults = useRef();

  const outsideClick = useCallback(
    (e) => {
      const isSearchBar =
        e.target?.parentElement?.matches(".search-bar") ||
        e.target?.parentElement?.matches(".search");

      if (isSearchBar) {
        queryResults.current?.classList.remove("hide");
      } else {
        queryResults.current?.classList.add("hide");
      }
    },
    [queryResults]
  );

  useEventListener("click", outsideClick);

  useEffect(() => {
    dispatch(searchItems(word)).then((res) => {
      const desks = res.items.desks.length ? ["Desks", ...res.items.desks] : [];
      const lists = res.items.lists.length ? ["Lists", ...res.items.lists] : [];
      const papers = res.items.papers.length
        ? ["Papers", ...res.items.papers]
        : [];
      setItems([...desks, ...lists, ...papers]);
    });
  }, [word]);

  const clearSearch = useCallback(() => {
    setWord("");
  }, [setWord]);

  return (
    <>
      <input
        placeholder="Search..."
        onChange={(event) => setWord(event.target.value)}
        value={word}
      />

      {!!word.length && !items.length ? (
        <div className="search-results" ref={queryResults}>
          <div style={{ fontSize: "16px" }}>No results found 😔</div>
        </div>
      ) : (
        !!items.length && (
          <div className="search-results" ref={queryResults}>
            {items.map((item, i) =>
              typeof item === "string" ? (
                <h2 key={i}>{item}</h2>
              ) : (
                <Link key={i} onClick={clearSearch} to={`/${item.id}/deskshow`}>
                  {item.title}
                </Link>
              )
            )}
          </div>
        )
      )}
    </>
  );
};

export default searchBar;
