import React from "react";
import styles from './imageStyles.scss';

interface Props {
    imageUrl: string;
}

export const ImageComponent:React.FC<Props> = (props) => {
    const image: string = props.imageUrl;

    return(
        <img src={image} className={styles.imgHeight} />
    )
}