import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

import AppBarContent from '../containers/AppBarContent';
import Modal from '../containers/Modal';
import Contacts from '../containers/Contacts';

import '../styles/App.css';

class App extends Component {     
    render() {
        return (
            <div className="App">
                <AppBar 
                    color="primary" 
                    position="static" 
                    children={<AppBarContent/>} 
                />
                <Modal/>
                <Contacts/>
            </div>
        )
    }
}

export default App;