import * as types from '../constants/actionTypes';

const initialState = {
    modal: false,
    name: '',
    firstname: '',
    number: '',
    type: '',
    contacts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return {...state, modal: true}
        case types.CLOSE_MODAL:
            return {
                ...state, 
                modal: false,
                name: '',
                firstname: '',
                number: '',
                type: ''
            }
        case types.NAME: 
            return {...state, name: action.payload}
        case types.FIRST_NAME: 
            return {...state, firstname: action.payload}
        case types.NUMBER: 
            return {...state, number: action.payload}
        case types.TYPE: 
            return {...state, type: action.payload}
        case types.NEW_CONTACT:
            return {
                ...state,
                contacts: state.contacts.concat({
                    name: state.name,
                    firstname: state.firstname,
                    number: state.number,
                    type: state.type,
                    editing: false
                }),
                name: '',
                firstname: '',
                number: '',
                type: ''
            }
        case types.DELETE_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, action.payload), 
                    ...state.contacts.slice(action.payload + 1)
                ] 
            }
        case types.SWITCH_EDIT_FORM:
            return {
                ...state,
                contacts: [...state.contacts].map(
                    (item, index) => 
                    index === action.payload
                        ? {...item, editing: !item.editing}
                        : item
                )
            }
        case types.EDIT_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts].map(
                    (item, index) => 
                    index === action.index 
                    ? 
                        {
                            ...item, 
                            type: action.typ,
                            name: action.name,
                            firstname: action.first,
                            number: action.numb
                        }
                    :
                        item
                )
            }
        default:
            return state;
    }
}

export default reducer;