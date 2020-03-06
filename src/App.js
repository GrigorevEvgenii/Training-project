import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={ () => <Profile store={props.store} /> } path="/Profile" />
          <Route render={ () => <DialogsContainer store={props.store} /> } path="/Dialogs"/>
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;