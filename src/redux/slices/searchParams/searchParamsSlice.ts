import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";


const initialState = {
    category: 'all',
    sortBy: 'relevance',
    searchFild: '',
    maxResults: 30,
    startIndex: 0,
}


const searchParamsSlice = createSlice({
    name: 'searchParams',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        },
        setSearchFild: (state, action: PayloadAction<string>) => {
            state.searchFild = action.payload
        },
        increaseStartIndex: (state) => {
            state.startIndex += state.maxResults
        },
    }
})


export const { setCategory, setSortBy, setSearchFild, increaseStartIndex } = searchParamsSlice.actions
export default searchParamsSlice.reducer