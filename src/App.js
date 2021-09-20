import axios from 'axios';
import { useState, useEffect, useRef, useReducer } from 'react';

function App() {
  //UseState
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //useEffect
  /* useEffect(() => {
    fetchData();
  }, [count]);

  //Delayed Data Fetching
  const fetchData = async () => {
    setComments([]);
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    setComments(data);
  }; */

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <h1>App has rendered</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>I am a comment</p>}
    </div>
  );
}

export default App;
