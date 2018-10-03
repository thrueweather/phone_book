import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openModal } from '../actions';

import '../styles/AppBar.css';

class AppBarContent extends Component {
    handleOpen = () => this.props.openModal();
    render() {
        return (
            <div className='content'>
                <div className="content-menu">
                    <button>
                        <Ionicon icon="md-menu" color="white" fontSize="30px"/>
                    </button>
                    <h3>Phone Book</h3>
                </div>
                <button onClick={this.handleOpen}>
                    <Ionicon icon="md-add" color="white" fontSize="30px"/>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({openModal: openModal}, dispatch)

export default connect(null, mapDispatchToProps)(AppBarContent);