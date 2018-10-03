export const openModal = () => ({type: 'OPEN_MODAL'})

export const closeModal = () => ({type: 'CLOSE_MODAL'})

export const handleName = name => ({
    type: 'NAME',
    payload: name
})

export const handleFirstName = firstname => ({
    type: 'FIRST_NAME',
    payload: firstname
})

export const handleNumber = number => ({
    type: 'NUMBER',
    payload: number
})

export const handleType = type => ({
    type: 'TYPE',
    payload: type
})

export const newContact = () => ({type: 'NEW_CONTACT'})

export const deleteContact = index => ({
    type: 'DELETE_CONTACT',
    payload: index
})

export const switchEditForm = index => ({
    type: 'SWITCH_EDIT_FORM',
    payload: index
})

export const editContact = (index, type, name, firstname, number) => ({
    type: 'EDIT_CONTACT',
    index: index,
    typ: type,
    name: name,
    first: firstname,
    numb: number
})