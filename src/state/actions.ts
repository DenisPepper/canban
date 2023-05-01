import {DragItem} from "../components/drag-item/drag-item";

export interface AddList {
    type: 'ADD_LIST';
    payload: string;
}

export interface AddTaskPayload {
    text: string;
    listId: string;
}

export interface AddTask {
    type: 'ADD_TASK';
    payload: AddTaskPayload;
}

export interface MoveListPayload {
    draggedId: string;
    hoverId: string;
}

export interface MoveList {
    type: 'MOVE_LIST';
    payload: MoveListPayload;
}

export interface SetDraggedItem {
    type: 'SET_DRAGGED_ITEM';
    payload: DragItem | null;
}

export type Action =
    | AddList
    | AddTask
    | MoveList
    | SetDraggedItem;

export const addTask = (args: AddTaskPayload): Action => {
    return {type: "ADD_TASK", payload: args};
};

export const addList = (title: string): Action => ({type: "ADD_LIST", payload: title});

export const moveList = (args: MoveListPayload): Action => {
    return {type: "MOVE_LIST", payload: args}
};

export const setDraggedItem = (draggedItem: DragItem | null): Action => {
    return {type: "SET_DRAGGED_ITEM", payload: draggedItem}
};
