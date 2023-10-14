import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocViewer from 'react-doc-viewer';

// importing screens
import HomePage from './Screens/HomePage';
import ProgramsPage from './Screens/ProgramsPage';
import AssessmentsPage from './Screens/AssessmentsPage';
import ReportsPage from './Screens/ReportsPage';
import BookletsPage from './Screens/BookletsPage';
import UsersPage from './Screens/UsersPage';

import EnglishPage from './Screens/EnglishPage';
import MathematicsPage from './Screens/MathematicsPage';

// importing Component
import Sidebar from './Components/Sidebar';

function App() {



  

  



  return (
    // Setting up the Router for navigation
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Sidebar Component */}
          <Sidebar />

          {/* Main Content */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/english" element={<EnglishPage/>} />
              <Route path="/mathematics" element={<MathematicsPage/>} />
              <Route path="/assessments" element={<AssessmentsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/booklets" element={<BookletsPage />} />
              <Route path="/users" element={<UsersPage />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
