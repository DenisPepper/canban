import {createContext, ReactNode, useContext} from "react";
import {AppState, Column, Task} from "./app-state-reducer";

const appData: AppState = {
    columns: [
        {id: '0', tasks: [{id: 'c0', text: 'task one'}], title: 'To do'},
        {id: '1', tasks: [{id: 'c1', text: 'task two'}], title: 'To do'},
        {id: '2', tasks: [{id: 'c2', text: 'task three'}], title: 'To do'},
    ],
};

interface AppStateContextProps {
    columns: Column[];
    getTasksByColumnId(id: string): Task[];
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = (props: {children: ReactNode}) => {
    const {children} = props;
    const {columns} = appData;

    const getTasksByColumnId = (id: string) => columns.find((column) => column.id === id)?.tasks || [];

    return (
      <AppStateContext.Provider value={{columns, getTasksByColumnId}}>{children}</AppStateContext.Provider>
    );
}

export const useAppState = () => useContext(AppStateContext);
