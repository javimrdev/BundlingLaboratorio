import React from 'react';
import styles from './titleStyles.scss';

interface Props {
    text: string;
}

export const TitleComponent: React.FC<Props> = (props) => {
    const text: string = props.text;

    return(
        <h2 className={styles.title}>{text}</h2>
    )
}