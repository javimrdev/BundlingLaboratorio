import React from 'react';
import styles from './titleStyles.scss';

export const TitleComponent = (props) => {
    const text = props.text;
const a: string = 'asd';
    return(
        <h2 className={styles.title}>{text}</h2>
    )
}