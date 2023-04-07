import * as actionTypes from './actions';

const initialState = {
    people: []
}

export const addPerson = (name, age) => ({
    type: actionTypes.ADD_PERSON,
    payload: {
        name,
        age,
    },
});

export const deletePerson = (id) => ({
    type: actionTypes.DELETE_PERSON,
    payload: {
        id,
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                people: [
                    ...state.people,
                    {
                        id: state.people.length + 1,
                        name: action.payload.name,
                        age: action.payload.age,
                    },
                ],
            };
        case actionTypes.DELETE_PERSON:
            return {
                ...state,
                people: state.people.filter((person) => person.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default reducer;