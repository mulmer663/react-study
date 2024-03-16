import {ToDoProps} from "../component/ToDo";

export interface gridArea {
    $gridArea: string,
}

export interface Paging {
    filter: number,
    currentPage: number,
    totalCount: number,
    ROWS: number
}

export const FILTER = {
    ALL: 0,
    FINISH: 1,
    PROCEED: 2,
} as const

export interface FilterCondition {
    [key: number]: (todo: ToDoProps) => boolean;
}

// 필터링 조건을 매핑하는 객체
export const filterCondition : FilterCondition = {
    [FILTER.ALL]: () => true,
    [FILTER.FINISH]: (todo: ToDoProps) => todo.$isFinish,
    [FILTER.PROCEED]: (todo: ToDoProps) => !todo.$isFinish,
};