import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {
  const ProfileWrapper = (p) => {
    return (
      <Profile posts={p.posts} />
    );
  }
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route component={ProfileWrapper} path="/Profile" />
          <Route component={Dialogs} path="/Dialogs"/>
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;