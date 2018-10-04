import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteContact, switchEditForm, editContact } from '../actions';

import Contact from '../components/Contact';

class Contacts extends Component {
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
            <div className="contacts">
                <Contact 
                    contacts={this.props.contacts}
                    deleteItem={this.handleClickOnDelete}
                    open={this.handleClickOpen}
                    editing={this.handleClickOnEditing}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({ contacts: state.contacts })

const mapDispatchToProps = dispatch => bindActionCreators({ 
    deleteContact, 
    switchEditForm,
    editContact
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);