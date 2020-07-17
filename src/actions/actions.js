

export const ADD_TOGGLE = 'ADD_TOGGLE'

export const addToggle = (feat) => {
    return { type: ADD_TOGGLE, payload:feat}
}

export const REMOVE_TOGGLE = 'REMOVE_TOGGLE'

export const removeToggle = (feat) => {
    return {type: REMOVE_TOGGLE, payload:feat}
}