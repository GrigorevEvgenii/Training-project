import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainerAPI from './components/Users/UsersContainer';
import {Route} from "react-router-dom"

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={ () => <ProfileContainer /> } path="/Profile/:userID?" />
          <Route render={ () => <DialogsContainer /> } path="/Dialogs"/>
          <Route render={ () => <UsersContainerAPI />} path="/Users/:userID?" />
        </div>
      </div>
    );
}

export default App;