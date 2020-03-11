import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from "react-router-dom"

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={ () => <Profile /> } path="/Profile" />
          <Route render={ () => <DialogsContainer /> } path="/Dialogs"/>
          <Route render={ () => <UsersContainer />} path="/Users" />
        </div>
      </div>
    );
}

export default App;