import {createContext, ReactNode, useContext, Dispatch} from "react";
import {AppState, appStateReducer, Column, Task} from "./app-state-reducer";
import {Action} from "./actions";
import { useImmerReducer } from "use-immer";

const initialState: AppState = {
    columns: [
        {id: '0', tasks: [{id: 'c0', text: 'to do task one'}], title: 'New tasks'},
        {id: '1', tasks: [{id: 'c1', text: 'finish task two'}], title: 'In process'},
        {id: '2', tasks: [{id: 'c2', text: 'task three'}], title: 'Completed'},
    ],
};

interface AppStateContextProps {
    columns: Column[];
    getTasksByColumnId(id: string): Task[];
    dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = (props: {children: ReactNode}) => {
    const {children} = props;
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    const {columns} = state;

    const getTasksByColumnId = (id: string) => columns.find((column) => column.id === id)?.tasks || [];

    return (
      <AppStateContext.Provider value={{columns, dispatch, getTasksByColumnId}}>{children}</AppStateContext.Provider>
    );
}

export const useAppState = () => useContext(AppStateContext);
