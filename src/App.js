import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [data, setData] = useState([]);
  const [source, setSource] = useState('users');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async (src) => {
      try {
        const response = await fetch(`${API_URL}/${src}`);

        if (!response.ok) throw Error('Did not receive data.');

        const dataItems = await response.json();

        setData(dataItems);
        setFetchError(null);
      } catch(err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems(source);
  }, [source])

  return (
    <div>
      <Header
        source={source}
        setSource={setSource}
      />
      {isLoading && <p className="loading">Loading items...</p>}
      {fetchError && <p className="error">{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <Content data={data} />}
    </div>
  );
}

export default App;
