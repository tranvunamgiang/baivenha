import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Counter () {
  let [like , setLike] = useState(0);
  return (
    <div>
      {/* camelcase */}
      <button onClick={() => setLike(like +1)}>👍🏻{like}</button>
      
    </div>
  );
}
export default Counter;
