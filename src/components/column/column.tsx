import css from './column.module.css';
import {ColumnTitle} from "../column-title/column-title";
import {Card} from "../card/card";
import {AddingForm, ParentName as Name} from "../adding-form/adding-form";

interface ColumnProps {
    title: string;
}

export const Column = (props: ColumnProps) => {
    const {title} = props;

    const handleFormSubmit = (text: string) => {
        console.log(text);
    }

    return (
        <ul className={css.column}>
            <ColumnTitle text={title} key={'ColumnTitle'}/>
            <Card content={'Go to movie'}/>
            <Card content={'Get shopping'}/>
            <Card content={'Read daily news'}/>
            <AddingForm parentName={Name.Card} handleFormSubmit={handleFormSubmit}/>
        </ul>
    );
}
