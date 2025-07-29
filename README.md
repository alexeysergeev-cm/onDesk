# onDesk

## Brief Introduction

Inspired by Trello, onDesk is a collaboration tool that organizes your projects and ideas into desks. Each desk contains lists of papers which tells you and your team where the project stands, what needs to be completed & many more. In general, onDesk allows to capture the bigger picture of your projects.


![S](https://github.com/alexeysergeev-cm/onDesk/blob/main/app/assets/images/intro.gif)

## Technologies

onDesk is built using the following stack & libraries:

### **Backend**
1. _Ruby on Rails_
   * Ruby on Rails is a server-side web application framework written in Ruby. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.
2. _PostgreSQL_
   * PostgreSQL is a relational database management system emphasizing extensibility and SQL compliance. 
3. _Ajax_
   * web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.
4. AWS S3
   * Amazon S3 is a storage service that provides object storage through a web service interface. onDesk uses AWS to store background and profile pictures.

### **Frontend**

1. _Javascript_
2. _React_
   *  React is a JavaScript library for building user interfaces. It deals with the views and lets you choose the rest of your front-end architecture.
3. _Redux_
   * Redux is a JavaScript library for managing application state. 
4. _react-bautiful-dnd_
   * React Beautiful DnD is an accessible drag and drop library that allowes to move the lists and papers from one container to another. 
5. _Babel_
   * Babel is a JavaScript compiler, a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in       current and older browsers or environments. 
6. _Webpack_
   * Webpack is a module bundler. It allows you to write your code in as many separate files as you need and creates a single output file for you to import into         your html file.

### **Hosting**
1. Heroku
   * Heroku is a platform as a service that enables developers to build, run, and operate applications entirely in the cloud.

## Features

Piece of code for Editing the Desk Title using react hooks and `useOnClickOutside` custom hook.

```javascript 
import { useCallback, useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function EditDesk({ clearErrors, desk, deskId, submitDesk, titleUpdate }) {
  const [title, setTitle] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (!deskId || !desk) return;

    setTitle(desk[deskId]?.title || "");
  }, [deskId, setTitle, desk]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const update = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(`Submiting new Desk: ${title}, ${deskId}`);

      submitDesk({
        title: title,
        id: deskId,
      }).then(() => titleUpdate(false));

      setTimeout(() => clearErrors(), 5000);
    },
    [submitDesk, titleUpdate, clearErrors, deskId, title]
  );

  const pressEnter = useCallback((e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }, [title]);

  useOnClickOutside(ref, (e) => handleSubmit(e));

  return (
    <input
      type="text"
      value={title}
      onChange={(e) => update(e)}
      className="desk-edit-input"
      placeholder="New title"
      ref={ref}
      onKeyDown={pressEnter}
    />
  );
}

export default EditDesk;
```
![S](https://github.com/alexeysergeev-cm/onDesk/blob/main/app/assets/images/create_desk.gif)

Comment Item component using React hooks to view/update/delete a comment.

```javascript
import { useCallback, useEffect, useState, useRef } from "react";
import { pressEnter } from "../../functions/functions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function CommentIndexItem({
  comment,
  updateComment,
  deleteComment,
  currentUserId,
}) {
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setBody(comment.body);
  }, [comment]);

  useEffect(() => {
    if (!editing) return;
    inputRef.current.focus();
  }, [editing, inputRef]);

  const update = useCallback(
    (e) => {
      setBody(e.target.value);
    },
    [setBody]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      updateComment({ id: comment.id, body }).then(() => {
        setEditing(false);
      });
    },
    [body, setBody, updateComment, comment.id, setEditing]
  );

  const removeComment = useCallback(() => {
    deleteComment(comment.id);
  }, [deleteComment, comment.id]);

  useOnClickOutside(ref, () => setEditing(false));

  return (
    <div className="comment-item">
      <div className="comment-author">
        {comment.username}
        <div className="time">{comment.time}</div>
      </div>
      {editing ? (
        <div
          className="comment-body"
          onKeyDown={(e) => pressEnter(e, handleSubmit)}
          ref={ref}
        >
          <input
            type="text"
            value={body}
            onChange={update}
            className="comment-edit-input is-typing"
            ref={inputRef}
          />
          <div
            className="button is-link is-outlined is-small"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </div>
        </div>
      ) : (
        <>
          <div className="comment-body">{comment.body}</div>
          {currentUserId === comment.author_id && (
            <div className="manipulate-comment">
              <div onClick={() => setEditing(!editing)}>Edit</div>
              <div onClick={removeComment}>Delete</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CommentIndexItem;
```

Search bar feature enables users to quickly search Database for Desks, Lists, and Paper. Component is built using React Hooks.

```javascript
const searchBar = () => {
  const [word, setWord] = useState('');
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchItems(word)).then(res => {
      const desks = res.items.desks.length ? ['Desks', ...res.items.desks] : [];
      const lists = res.items.lists.length ? ['Lists', ...res.items.lists] : [];
      const papers = res.items.papers.length ?['Papers', ...res.items.papers] : [];
      setItems([...desks, ...lists, ...papers])
    })
  }, [word])

  const removeSearch = () => {
    document.getElementsByClassName('search-bar')[0].classList.toggle('go')
    document.getElementsByClassName('search-results')[0].style.display = 'none'
  }

  return(
    <>
      <input 
        placeholder='Search for...' 
        onChange={event => setWord(event.target.value)}
      />
      
      {items.length ? ( 
        <div className='search-results'>
          {items.map((item, i)=> {
            if (typeof item === 'string'){
              return (<h2 key={i}>{item}</h2>)
            }
            return (
              <p key={i}>
                <Link to={`/${item.id}/deskshow`} onClick={removeSearch}>
                  {item.title}
                </Link>
              </p>
            )
          })}
        </div> ) : ( <></> )
        }
    </>
  )

}

export default searchBar;
```

![S](https://github.com/alexeysergeev-cm/onDesk/blob/main/app/assets/images/search_bar.gif)

Users are able to do a full CRUD cycle with lists and papers, additionally move them around by dragging and dropping. The Drag and Drop feature is implemented by using `react-beautiful-dnd` to deliver a better UX. 

```javascript
<Droppable droppableId={(list_id).toString()}
        type="paper">
        {(provided) => (
          <div className="paper-index-container"
              {...provided.droppableProps} ref={provided.innerRef}>

            {organizedPapers.map((paper, i) => {
                return (
                  <Draggable key={paper.id} draggableId={(paper.id).toString()} index={i}>
                    {(provided, snapshot) => (
                      <div className='paper-wrapper' 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef} 
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className='paper-item'>
                          <PaperIndexItem
                            paper={paper}
                            listId={list_id}
                            deletePaper={this.props.deletePaper}
                            openModal={openModal}
                            comments={comments}
                            />
                        </div>      
                      </div>
                    )}
                  </Draggable>
                )
            })}
            {provided.placeholder}
          </div>
        )}
</Droppable >
```
![S](https://github.com/alexeysergeev-cm/onDesk/blob/main/app/assets/images/dnd.gif)


## Coming soon

* Search bar 
   * enable users to find their desks/lists/papers.
* Due dates
* Caching
   * improve load time
* Desk Settings
* Hotkeys
