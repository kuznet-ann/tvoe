import React from 'react';

import style from '../base/Trailer/Trailer.module.scss';
import TrailerItem from './TrailerItem';


export default function TrailerList({ trailers }) {
    return (
        <ul className={style.trailers}>
            {trailers.map((el, i) =>
                <TrailerItem id={i + 1} image={el.img_cover} progress={el.progress} />
            )}
        </ul>
    )
}
