import { useCallback, useState } from "react";
import classnames from "classnames";

function HomePageMenu({ handleClick }) {
  const [isContact, setIsContact] = useState(false);
  const [isSocial, setIsSocial] = useState(false);
  const [singleActive, setSingleActive] = useState(1);

  const handleProjectsClick = useCallback(
    (id) => {
      setSingleActive(id);
      let target;
      if (id === 1) {
        target = "All desk";
      } else if (id === 2) {
        target = "Created By You";
      } else {
        target = "Shared With You";
      }
      handleClick(target);
    },
    [setSingleActive, handleClick]
  );

  const selectContact = useCallback(() => {
    setIsContact(!isContact);
  }, [isContact, setIsContact]);

  const selectSocial = useCallback(() => {
    setIsSocial(!isSocial);
  }, [isSocial, setIsSocial]);

  return (
    <aside className="menu">
      <p className="menu-label">Projects</p>
      <ul className="menu-list">
        <li onClick={() => handleProjectsClick(1)}>
          <a className={classnames({ "is-active": singleActive === 1 })}>
            All Desks
          </a>
        </li>
        <li onClick={() => handleProjectsClick(2)}>
          <a className={classnames({ "is-active": singleActive === 2 })}>
            Created By You
          </a>
        </li>
        <li onClick={() => handleProjectsClick(3)}>
          <a className={classnames({ "is-active": singleActive === 3 })}>
            Shared With You
          </a>
        </li>
      </ul>
      <p className="menu-label">Connect with me</p>
      <ul className="menu-list">
        <li>
          <a
            className={classnames({ "is-active": isContact })}
            onClick={selectContact}
          >
            Contact
          </a>
          {isContact && (
            <ul>
              <li>
                <a
                  href="https://calendly.com/alexeysergeev-software-engineer"
                  target="none"
                >
                  Schedule a call
                </a>
              </li>
              <li>
                <a href="https://alexeysergeev-cm.github.io" target="none">
                  Portfolio <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>xengawe@gmail.com</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            className={classnames({ "is-active": isSocial })}
            onClick={selectSocial}
          >
            Social
          </a>
          {isSocial && (
            <ul>
              <li>
                <a href="https://angel.co/u/alexey-sergeev-cm" target="none">
                  Angel List{" "}
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/alexeysergeev-cm" target="none">
                  Github <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexey-sergeev-cm"
                  target="none"
                >
                  LinkedIn{" "}
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default HomePageMenu;
