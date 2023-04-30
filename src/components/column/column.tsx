import css from './column.module.css';
import {ColumnTitle} from "../column-title/column-title";
import {Card} from "../card/card";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";
import {useAppState} from "../../state/app-state-context";
import {addTask} from "../../state/actions";

interface ColumnProps {
    title: string;
    id: string;
}

export const Column = (props: ColumnProps) => {
    const {title, id} = props;
    const {getTasksByColumnId, dispatch} = useAppState();
    const tasks = getTasksByColumnId(id);

    const handleFormSubmit = (text: string) => {
        dispatch(addTask({listId: id, text}));
    }

    return (
        <ul className={css.column}>
            <ColumnTitle text={title} key={'ColumnTitle'}/>
            {tasks.map((task) => <Card key={task.id} id={task.id} content={task.text}/>)}
            <AddingForm parentName={Name.Card} handleFormSubmit={handleFormSubmit}/>
        </ul>
    );
}
