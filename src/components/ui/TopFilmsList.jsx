import React from 'react';

import TopFilmsItem from './TopFilmsItem';
import style from '../base/TopFilms/TopFilms.module.scss';

import first from '../../app/images/top-films/1.png';
import second from '../../app/images/top-films/2.png';
import third from '../../app/images/top-films/3.png';
import fourth from '../../app/images/top-films/4.png';
import fifth from '../../app/images/top-films/5.png';
import sixth from '../../app/images/top-films/6.png';
import seventh from '../../app/images/top-films/7.png';
import eighth from '../../app/images/top-films/8.png';
import ninth from '../../app/images/top-films/9.png';
import tenth from '../../app/images/top-films/10.png';

import num1 from '../../app/images/nums/1.png';
import num2 from '../../app/images/nums/2.png';
import num3 from '../../app/images/nums/3.png';
import num4 from '../../app/images/nums/4.png';
import num5 from '../../app/images/nums/5.png';
import num6 from '../../app/images/nums/6.png';
import num7 from '../../app/images/nums/7.png';
import num8 from '../../app/images/nums/8.png';
import num9 from '../../app/images/nums/9.png';
import num10 from '../../app/images/nums/10.png';

const topFilms = [
    {
        place: num1.src,
        cover: first.src,
    },
    {
        place: num2.src,
        cover: second.src,
    },
    {
        place: num3.src,
        cover: third.src,
    },
    {
        place: num4.src,
        cover: fourth.src,
    },
    {
        place: num5.src,
        cover: fifth.src,
    },
    {
        place: num6.src,
        cover: sixth.src,
    },
    {
        place: num7.src,
        cover: seventh.src,
    },
    {
        place: num8.src,
        cover: eighth.src,
    },
    {
        place: num9.src,
        cover: ninth.src,
    },
    {
        place: num10.src,
        cover: tenth.src,
    },
];

export default function TopFilmsList() {
    return (
        <ul className={style.list}>
            {topFilms.map((el, i) =>
                <TopFilmsItem key={i} data={el} />
            )}
        </ul>
    );
}
