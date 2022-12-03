import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [list, setList] = useState([]);
  const [source, setSource] = useState('users');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [btnStates, setbtnStates] = useState({
    "users": true,
    "posts": false,
    "comments": false
  });

  useEffect(() => {
    fetchItems(source);
  }, [source])
  
  const handleToggle = (src) => {
    const curBtnStates = {};
    
    for (const key in btnStates) {
      curBtnStates[key] = key === src;
    }
    
    setbtnStates(curBtnStates);
    setSource(src);
  }

  const fetchItems = async (src) => {
    try {
      const URL = `${API_URL}/${src}`;
      const response = await fetch(URL);
      if (!response.ok) throw Error('Did not receive data.');
      const listItems = await response.json();
      setList(listItems);
      setFetchError(null);
    } catch(err) {
      setFetchError(err.message)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Header
        btnStates={btnStates}
        handleToggle={handleToggle}
      />
      {isLoading && <p className="loading">Loading items...</p>}
      {fetchError && <p className="error">{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <Content list={list} />}
    </div>
  );
}

export default App;
