import React from "react";
import styles from './imageStyles.scss';

export const ImageComponent = (props) => {
    const image = props.image;

    return(
        <img src={image} className={styles.imgHeight} />
    )
}