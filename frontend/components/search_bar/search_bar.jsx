import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchItems } from '../../actions/search_actions';
import { Link } from 'react-router-dom';

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

  return(
    <>
      <form>
        <input 
          placeholder='Search for...' 
          onChange={event => setWord(event.target.value)}
        />
      </form>
      
      {items.length ? ( 
        <div className='search-results'>
          {items.map((item, i)=> {
            //naming separation
            if (typeof item === 'string'){
              return (<h2 key={i}>{item}</h2>)
            }
            return (
              <p key={i}>
                <Link to={`/${item.id}/deskshow`}>
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