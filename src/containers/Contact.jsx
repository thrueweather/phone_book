import React, { Component } from 'react';
import Ionicons from 'react-ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteContact, switchEditForm, editContact } from '../actions/index';

import EditForm from '../components/EditForm';

import '../styles/Contact.css';

class Contact extends Component {
    handleClickOnDelete = index => this.props.deleteContact(index);

    handleClickOpen = index => this.props.switchEditForm(index);

    handleClickOnEditing = index => {
        const options = document.getElementById('options').value;
        const name = document.getElementById('standard-name').value;
        const firstname = document.getElementById('standard-firstname').value;
        const number = document.getElementById('standard-number').value;


        if(!options || !name || !firstname || !number) {
            return;
        }

        this.props.editContact(index, options, name, firstname, number);
        this.props.switchEditForm(index);
    }

    render() {
        return (
            <div className="contact">
                {this.props.contacts.map((item, index) => 
                    <li key={index}>
                        <div className="editing" onClick={() => this.handleClickOpen(index)}>
                            <Ionicons icon="ios-settings-outline"/>
                        </div>
                        <div className="delete" onClick={() => this.handleClickOnDelete(index)}>
                            <Ionicons icon="md-close"/>
                        </div>
                        <div>Type: <h3>{item.type}</h3></div>
                        <div>
                            <Ionicons icon="md-person"/> 
                            <h4>{item.name} {item.firstname}</h4>
                        </div>
                        <div>
                            <Ionicons icon="ios-call"/> 
                            <p>{item.number}</p>
                        </div>
                        <EditForm 
                            item={item} 
                            handleClick={() => this.handleClickOnEditing(index)}
                        />
                    </li>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
    deleteContact, 
    switchEditForm,
    editContact
}, dispatch)

export default connect(null, mapDispatchToProps)(Contact)