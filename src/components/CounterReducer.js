import {
    ADD_COUNTER,
    INCREMENT,
    DECREMENT,
    DELETE,
    INPUT,
} from "./ActionTypeCounter";

const initialState = {
    form:'',
    counters: []
};

function CounterReducer( state = initialState, action) {

    const { type, payload} = action;

    console.log('dispatch type: ', type);
    console.log('dispatch payload: ', payload);
    // console.log('array counter: ', state);

    switch (type) {
        case ADD_COUNTER:
            // state.form.nama=1
            return {...state, counters: state.counters.concat([{form: state.form, value: payload}])};
        case INCREMENT:
            return {...state, counters: state.counters.map((counter, index) =>
                    (index === payload ? {...counter, value: counter.value + 1} : counter))};
        case DECREMENT:
            return {...state, counters: state.counters.map((counter, index) =>
                    (index === payload ? {...counter, value: counter.value - 1} : counter))};
        case DELETE:
            return {...state, counters: state.counters.filter((counter, index) =>
                    (index !== payload))};
        case INPUT:
            return {...state, form: payload};
        default:
            return {...state};
    }
}

export default CounterReducer;
