import React from 'react';

import style from '../base/Trailer/Trailer.module.scss';
import TrailerItem from './TrailerItem';


export default function TrailerList({ trailers }) {
    return (
        <ul className={style.trailers}>
            {trailers.map((el, i) =>
                <TrailerItem key={i} id={i + 1} link={el.link} image={el.img_cover} progress={el.progress} />
            )}
        </ul>
    )
}
