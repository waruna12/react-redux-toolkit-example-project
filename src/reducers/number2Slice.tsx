import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";


interface State {
    [key: string]: number;
}

const initialState: State = {
    number: 100,
};

type ReducerGenType = (key?: string, operator?: '+' | '-') => CaseReducer<State, PayloadAction<number>>;


const reducerGen: ReducerGenType = (key = 'number', operator = '+') => {
    return (state, action) => {
        if (operator === '+') {
            state[key] += action.payload;
        } else if (operator === '-') {
            state[key] -= action.payload;
        }
    };
};

const number2Slice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increment2: reducerGen(),
        decrement2: reducerGen('number', '-'),
        // increment2: (state, action) => {
        //     state.number += action.payload
        // },
        // decrement2: (state, action) => {
        //     state.number -= action.payload
        // }
    }
});


export const numberSlice2Selector = (store: any) => store.number2Slice;
export const { increment2, decrement2 } = number2Slice.actions;
export default number2Slice.reducer;