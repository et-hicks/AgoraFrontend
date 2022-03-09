import {createSlice} from "@reduxjs/toolkit";

const showThreadsInitialState = {
    expand: true
};

const showThreads = createSlice({
    name: 'showThreads',
    initialState: showThreadsInitialState,
    reducers: {
        show(state) {
            state.expand = true;
        },
        hide(state) {
            state.expand = false;
        },
        invert(state) {
            state.expand = !state.expand;
        }
    },
});

export const { show, hide, invert } = showThreads.actions

export default showThreads.reducer