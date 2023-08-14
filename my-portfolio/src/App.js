import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProfilePage from './ProfilePage';
import SignUp from './Sign-up'; 


function App() {
  return (
    <Router>
    <div className="app-container">
       <header>
        {/* Header content */}
        </header>
        <main>
          {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
        <footer>
          {/*  Footer content */}
    </Router> 
  );
}

export default App;



        
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
        
        <footer>
          {/* Your footer content */}
          <p>Footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


  
