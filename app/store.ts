import {configureStore, ThunkAction, Action, combineReducers, createSlice, PayloadAction} from '@reduxjs/toolkit'

// import counterReducer from '../features/counter/counterSlice'

// might be useful
// https://redux-toolkit.js.org/api/createSlice

export function makeStore() {
    return configureStore({
        middleware: undefined,
        preloadedState: undefined,
        reducer: {
            u: counterSlice1.reducer,
            r: counterSlice2.reducer
        },
    })
}

const initialState1 = { value: 0 }
const counterSlice1 = createSlice({
    name: 'counter',
    initialState: initialState1,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

const initialState2 = { value: 0 }
const counterSlice2 = createSlice({
    name: 'counter2',
    initialState: initialState2,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})


const smallReducer = (currentState: any, action: any) => {
    return {
        count: currentState.count + 1
    }
}
const anotherSmallReducer = (currentState: any, action: any) => {
    return {
        count: currentState.count + 1
    }
}

const root = combineReducers({
    small: smallReducer,
    another: anotherSmallReducer
})

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
    >

export default store