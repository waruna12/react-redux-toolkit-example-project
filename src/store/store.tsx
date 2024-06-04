import { UnknownAction, configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "../reducers/numberSlice";
import laptopSliceReducer from "../reducers/laptopSlice";
import number2SliceReducer from "../reducers/number2Slice";

const store = configureStore({
    reducer: {
        numberSlice: numberSliceReducer,
        number2Slice: number2SliceReducer,
        laptopSlice: laptopSliceReducer,
    }
});

export default store;