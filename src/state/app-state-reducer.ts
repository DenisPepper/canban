import {Action} from "./actions";
import {nanoid} from 'nanoid';
import {findIndexByItemId, moveItem} from "../utils/array-utils";

export interface Task {
    id: string;
    text: string;
}

export interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

export interface AppState {
    columns: Column[];
}

const addList = (state: AppState, list: Column) => state.columns.push(list);

const addTask = (state: AppState, index: number, task: Task) => state.columns[index].tasks.push(task);

export const appStateReducer = (state: AppState, action: Action): AppState | void => {
    switch (action.type) {

        case 'ADD_LIST':
            addList(state, {id: nanoid(), title: action.payload, tasks: [] });
            break;

        case 'ADD_TASK':
            const {text, listId} = action.payload;
            const index = findIndexByItemId(state.columns, listId);
            addTask(state, index, {id: nanoid(), text});
            break;

        case 'MOVE_LIST':
            const {draggedId, hoverId} = action.payload;
            const draggedIndex = findIndexByItemId(state.columns, draggedId);
            const hoverIndex = findIndexByItemId(state.columns, hoverId);
            state.columns = moveItem(state.columns, draggedIndex, hoverIndex);
            break;

        default: break;
    }
};

