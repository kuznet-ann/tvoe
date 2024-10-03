import React from 'react';

import style from '../base/TopFilms/TopFilms.module.scss';
import Image from 'next/image';

export default function TopFilmsItem({ data }) {
    return (
        <li className={style.item}>
            <Image
                className={style.place}
                src={data.place}
                alt=''
                width={245}
                height={142}
            />
            <Image
                className={style.cover}
                src={data.cover}
                alt=''
                width={300}
                height={450}
            />
        </li>
    );
}
