import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import SignUp from './SignUp'; // Updated the component name to follow proper naming conventions

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Switch>
    </Router>
  );
}

export default App;