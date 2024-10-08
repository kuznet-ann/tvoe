import React from 'react';

import style from './ShortInfo.module.scss';

export default function shortInfo({ el, width }) {
    return (
        <ul className={style.list}>
            <li className={style.rating}>{el.rating}</li>
            {el.premiere ? (
                <>
                    <li className={style.dot}></li>
                    <li className={style.premiere}>Премьера</li>
                </>
            ) : (
                ''
            )}
            <li className={style.dot}></li>
            <li>{el.year}</li>
            <li className={style.dot}></li>
            <li>{el.genre}</li>
            <li className={style.dot}></li>
            <li>{el.country}</li>
            <li className={style.dot}></li>
            <li>{el.age_limit}</li>
        </ul>
    );
}
