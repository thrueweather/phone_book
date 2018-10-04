import React from 'react';
import Ionicons from 'react-ionicons';

import EditForm from './EditForm';

import '../styles/Contact.css';

const Contact = ({ contacts, open, deleteItem,  editing }) => 
        <div className="contact">
            {contacts.map((item, index) => 
                <li key={index}>
                    <div className="editing" onClick={() => open(index)}>
                        <Ionicons icon="ios-settings-outline"/>
                    </div>
                    <div className="delete" onClick={() => deleteItem(index)}>
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
                    <EditForm item={item} onClick={() => editing(index)}/>
                </li>
            )}
        </div>


export default Contact;