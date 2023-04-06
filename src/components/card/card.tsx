import css from './card.module.css';

interface CardProps {
    content: string;
}

export const Card = (props: CardProps) => {
    const {content} = props;

    return (
        <li className={css.card}>
            {content}
        </li>
    );
}
