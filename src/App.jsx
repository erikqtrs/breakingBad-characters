import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { BreakingGrid } from './components/BreakingGrid/BreakingGrid';
import { Search } from './components/Search/Search';

import axios from 'axios';


function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const getQeury = ( text ) => {
    setQuery( text )
  }

  useEffect( () => {
    const getData = async () => {
      const result = await axios({
        method: 'get',
        url: `https://www.breakingbadapi.com/api/characters?name=${query}`
      })

      setItems( result.data );
      setIsLoading(false);
      console.log( result.data );
    }

    getData();
  }, [query] )

  
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <main className="w-9/12 mx-auto p-6">
        <Search
          getQuery={ (text) => getQeury(text) }
        />
        <BreakingGrid
          items= {items}
          isLoading={isLoading}
        />
      </main>

      
    </div>
  );
}

export default App;
