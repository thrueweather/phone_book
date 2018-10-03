import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormEdit = ({ item, handleClick }) => {
    if(item.editing) {
        return (
            <div>
                <InputLabel htmlFor="age-native-simple">Type</InputLabel><br/>
                <Select native id="options">
                    <option> {item.type}</option>
                    <option> Friend</option>
                    <option> Relative</option>
                    <option> Employee</option>
                    <option> Client</option>
                    <option> Provider</option>
                    <option> Customer</option>
                    <option> Buyer</option>
                </Select>
                <TextField
                    id="standard-name"
                    label="Name"
                    defaultValue={item.name}
                    margin="normal"
                />
                <TextField
                    id="standard-firstname"
                    label="First Name"
                    defaultValue={item.firstname}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    defaultValue={item.number}
                    margin="normal"
                />
                <Button 
                    onClick={handleClick}
                    variant="contained" 
                    color="secondary"
                    href="#contained-buttons"
                >
                    Save
                </Button>
            </div>
        )
    }
    return <div></div>
}

export default FormEdit;