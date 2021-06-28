import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchItems } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

const searchBar = () => {
  const [word, setWord] = useState('');
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    // debugger
    dispatch(searchItems(word)).then(res => setItems([...res.items.desks]))
    // debugger
  }, [word])

  return(
    <>
      <form>
        <input 
          placeholder='Search for...' 
          onChange={event => setWord(event.target.value)}

        />
        
      </form>
      {items.length ? ( <div className='search-results'>
                        {items.map((item, i)=> {
                          return (
                            // <p key={i} className='search-item'>{item.title}</p>
                            <p key={item.id}>
                             <Link to={`/${item.id}/deskshow`}>
                               {item.title}
                             </Link>
                            </p>
                          )
                        })}
                      </div> ) : ( <></> )}
    </>
  )

}

export default searchBar;