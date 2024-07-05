import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e) {
            const error = e.response.data;
            return rejectWithValue(error)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            return data
        } catch (e) {
            const error = e.response.data
            return rejectWithValue(error)
        }
    }
)
const update = createAsyncThunk(
    'createSlice/update',
    async ({id, newCar}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.updateById(id, newCar);
            return data
        } catch (e) {
            const error = e.response.data
            return rejectWithValue(error)
        }
    }
)
const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id},{rejectWithValue})=>{
        try {
            await carsService.deleteById(id)
        } catch (e){
            const err = e.response.data
            return rejectWithValue(err)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarUpdate:(state,action) =>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(create.fulfilled, (state) => {
                state.trigger = !state.trigger
            })
            .addCase(update.fulfilled,(state)=>{
                state.trigger = !state.trigger
            })
            .addCase(deleteCar.fulfilled,state => {
                state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carActions,
    carReducer
}