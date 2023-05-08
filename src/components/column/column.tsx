import css from './column.module.css';
import {ColumnTitle} from "../column-title/column-title";
import {Card} from "../card/card";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";
import {useAppState} from "../../state/app-state-context";
import {addTask, moveList} from "../../state/actions";
import {useRef} from "react";
import {useItemDrag} from "../../hooks/use-item-drag/use-item-drag";
import {useDrop} from "react-dnd";
import {throttle} from "throttle-debounce-ts";

interface ColumnProps {
    title: string;
    id: string;
}

export const Column = (props: ColumnProps) => {
    const {title, id} = props;
    const {getTasksByColumnId, dispatch, draggedItem} = useAppState();
    const tasks = getTasksByColumnId(id);
    const ref = useRef<HTMLUListElement>(null);
    const {drag} = useItemDrag({type: 'COLUMN', id, text: title});
    const [, drop] = useDrop({
        accept: 'COLUMN', hover: throttle(200, () => {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === 'COLUMN') {
                if (draggedItem.id === id) {
                    return;
                }
                dispatch(moveList({draggedId: draggedItem.id, hoverId: id}));
            }
        })
    });

    drag(drop(ref));

    const handleFormSubmit = (text: string) => {
        dispatch(addTask({listId: id, text}));
    }

    return (
        <ul className={css.column} ref={ref}>
            <ColumnTitle text={title} key={'ColumnTitle'}/>
            {tasks.map((task) => <Card key={task.id} id={task.id} content={task.text}/>)}
            <AddingForm parentName={Name.Card} handleFormSubmit={handleFormSubmit}/>
        </ul>
    );
}
