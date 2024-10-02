import React from 'react';

import style from '../base/New/New.module.scss';

import cover from '../../app/images/films/mufasa-the-lion-king/cover.png';
import Image from 'next/image';

export default function NewLItem({ data }) {
    return (
        <li>
            <div className={style.wrapper}>
                <p className={style.rating}>{(String(data.rating)).replace(".", ",")}</p>
                {data.new ? <p className={style.new}>Новый сезон</p> : ''}
                <Image
                    className={style.img}
                    src={data.img_cover}
                    alt=''
                    width={280}
                    height={425}
                />
            </div>
            <h4 className={style.subtitle}>{data.name.substring(0, 27)}{data.name.length >= 27 && '...'}</h4>
            <p className={style.info}>{data.year}, {data.duration}</p>
        </li>
    );
}