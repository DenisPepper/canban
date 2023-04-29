import css from './field.module.css';
import {Column} from "../column/column";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";
import {useAppState} from "../../state/app-state-context";

export const Field = () => {
    const {columns} = useAppState();

    const handleFormSubmit = (text: string) => {
        console.log(text);
    }

    return (
        <main className={css.field}>
            {columns.map((column) =>
                <Column
                    key={column.id}
                    id={column.id}
                    title={column.title}
                />)
            }
            <AddingForm parentName={Name.Column} handleFormSubmit={handleFormSubmit}/>
        </main>
    );
}
