import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
}
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carActions,
    carReducer
}