import {
    RESET_GOREST,
    CREATE_GOREST,
    UPDATE_GOREST,
    DELETE_GOREST,
    EDIT_GOREST,
    FETCH_GOREST,
    FETCH_COMPLETE_GOREST } from "./Action";

const defaultFormValues = {
    id: "",
    name: "",
    email: "",
    gender: "",
    status: ""
};

const initialState = {
    isLoading: true,
    gorests:[],
    form:{...defaultFormValues}
};

function gorestsReducer(state = initialState, action) {
    const {type,payload} = action;

    switch (type) {
        case CREATE_GOREST:
            return{...state, gorests:state.gorests.concat({payload})};
        case UPDATE_GOREST:
            return{...state, gorests:state.gorests.map((gorest)=>gorest.id===payload.id?{...payload}:gorest)};
        case DELETE_GOREST:
            return{...state, gorests:state.gorests.filter((gorest)=>gorest.id===payload) };
        case EDIT_GOREST:
            const gorest = state.genre.find((gorest)=>gorest.id===payload);
            return{...state, form: {...gorest}};
        case RESET_GOREST:
            return{...state, form: {...defaultFormValues}};
        case FETCH_GOREST:
            return{...state, isLoading: true};
        case FETCH_COMPLETE_GOREST:
            return{...state, isLoading: false, gorests: [...payload]};
        default:
            return{...state};
    }

}

export default gorestsReducer;
