import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import User from './User';

function App() {

  // const [count, setCount] = useState(0);
  return (
    <Router>
      <Route exact path="/" component={User} />
    </Router>
    )

}

export default App;