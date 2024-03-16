import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {FILTER, Paging} from "../common/CommonProps";


const initialState: Paging = {
    filter: FILTER.ALL, /* 전체, 진행중, 완료 필터링 정보 */
    currentPage: 1,
    totalCount: 0,
    ROWS: 5
}

const pagingSlice = createSlice({
    name: 'paging',
    initialState,
    reducers: {
        filtering(state, action) {
            state.filter = action.payload;
        },
        updateTotalCount(state, action) {
            state.totalCount = action.payload;
        },
        plusTotalCount(state, action) {
            state.totalCount = state.totalCount + action.payload;
        },
        updateCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
})

export const {
    filtering, updateTotalCount, updateCurrentPage
    , plusTotalCount
} = pagingSlice.actions
export const selectPagingFilter = (state: RootState) => state.paging.filter;
export const selectPaging = (state: RootState) => state.paging;
export default pagingSlice.reducer