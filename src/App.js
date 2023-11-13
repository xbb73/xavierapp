import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar, NoteCollection} from "./ui-components";
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
        <NoteNavBar/><NoteCollection/>
      </header></div>
    );
}
}

export default withAuthenticator(App);