import React, { useEffect, useState} from 'react';

const searchBar = (props) => {
  const [word, setWord] = useState('');
  const [items, setItems] = useState([]);


  return(
    <>
      <form>
        <input placeholder='Search for...' 
        onChange={(event)=> props.callback(event.target.value)}
        />
        
      </form>
    </>
  )

}

export default searchBar;