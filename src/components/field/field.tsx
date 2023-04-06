import css from './field.module.css';
import {Column} from "../column/column";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";
import {COLUMNS} from "../../settings";

export const Field = () => {

    const handleFormSubmit = (text: string) => {
        console.log(text);
    }

    return (
        <main className={css.field}>
            {COLUMNS.map((id) =>
                <Column
                    key={id}
                    title={`Заголовок ${id}`}
                />)
            }
            <AddingForm parentName={Name.Column} handleFormSubmit={handleFormSubmit}/>
        </main>
    );
}
