import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, PreloadedState } from "redux";
import { booksApiSlice } from "./slices/books/booksApi";
import searchParamsSlice from "./slices/searchParams/searchParamsSlice";


const rootReducer = combineReducers({
    searchParams: searchParamsSlice,
    [booksApiSlice.reducerPath]: booksApiSlice.reducer
})


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApiSlice.middleware),
        preloadedState
    })

    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']