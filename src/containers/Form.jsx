import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { 
    handleName, 
    handleFirstName, 
    handleNumber, 
    handleType, 
    newContact, 
    closeModal 
} from '../actions';

class Form extends Component {
    handleChangeOnName = (e) => this.props.handleName(e.target.value);

    handleChangeOnFirstName = e => this.props.handleFirstName(e.target.value);

    handleChangeOnNumber = e => this.props.handleNumber(e.target.value);
    
    handleChangeOnType = e => this.props.handleType(e);
    
    handleChangeOnAddContact = () => {
        const { name, firstname, number, type } = this.props;

        if(!name || !firstname || !number || !type) {
            alert('Please fill in all the fields!');
            return;
        }
        this.props.newContact();
        this.props.closeModal();
    }

    render() {
        return (
            <form>
                <TextField
                    id="standard-name"
                    label="Name"
                    margin="normal"
                    placeholder="Enter your name" 
                    value={this.props.name}
                    onChange={this.handleChangeOnName}
                />
                <TextField
                    id="standard-firstname"
                    label="First name"
                    margin="normal"
                    placeholder="Enter your first name" 
                    value={this.props.firstname}
                    onChange={this.handleChangeOnFirstName}
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    margin="normal"
                    placeholder="+38 (097) 123-45-67" 
                    value={this.props.number}
                    onChange={this.handleChangeOnNumber}
                />
                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                <Select native onClick={e => this.handleChangeOnType(e.target.value)}>
                    <option value="" />
                    <option> Friend</option>
                    <option> Relative</option>
                    <option> Employee</option>
                    <option> Client</option>
                    <option> Provider</option>
                    <option> Customer</option>
                    <option> Buyer</option>
                </Select>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.handleChangeOnAddContact}
                >
                    Add
                </Button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    name: state.name,
    firstname: state.firstname,
    number: state.number,
    type: state.type
})

const mapStateDispatchToProps = dispatch => {
    return bindActionCreators({
        handleName, 
        handleFirstName, 
        handleNumber, 
        handleType,
        newContact,
        closeModal
    }, dispatch)
}

export default connect(mapStateToProps, mapStateDispatchToProps)(Form);