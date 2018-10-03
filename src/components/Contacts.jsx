import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from '../containers/Contact';

class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <Contact contacts={this.props.contacts}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ contacts: state.contacts })

export default connect(mapStateToProps, null)(Contacts);