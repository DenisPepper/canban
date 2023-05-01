import css from './field.module.css';
import {Column} from "../column/column";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";
import {useAppState} from "../../state/app-state-context";
import {addList} from "../../state/actions";

export const Field = () => {
    const {columns, dispatch} = useAppState();

    const handleFormSubmit = (text: string) => {
        dispatch(addList(text));
    }

    return (
        <main className={css.field}>
            <div className={css.columns}>
            {columns.map((column) =>
                <Column
                    key={column.id}
                    id={column.id}
                    title={column.title}
                />)
            }
            </div>
            <div className={css.form}>
                <AddingForm parentName={Name.Column} handleFormSubmit={handleFormSubmit}/>
            </div>
        </main>
    );
}
