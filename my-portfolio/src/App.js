import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './home';
import ProfilePage from './ProfilePage';
import SignUp from './Sign-up'; 
import Footer from './Footer';


function App() {
  return (
    <Router>
    <div className="app-container">
       <header>
        {/*  */}
        </header>
        <main>
            
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
        <footer>
          <Footer />
          </footer>
          </div>
    </Router> 
  );
}

export default App;



        
  


  
