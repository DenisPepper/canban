import css from './column-title.module.css';

interface ColumnTitleProps {
    text: string;
}

export const ColumnTitle = (props: ColumnTitleProps) => {
    const {text = 'Заголовок колонки'} = props;

    return (
        <h2 className={css.title}>
            {text}
        </h2>
    );
}
