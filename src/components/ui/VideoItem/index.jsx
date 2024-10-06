import Image from 'next/image';
import React from 'react';

import style from './VideoItem.module.scss';
import Link from 'next/link';

export default function Video({ name = '', image = '', time = '', link = '#', progress = '' }) {
    return (
        <li className={style.item}>
            <Link href={link} className={style.link}>
                {time ? <span className={style.time}>{time}</span> : ''}
                <Image
                    className={style.img}
                    src={image}
                    width={391}
                    height={220}
                    alt='Обложка видео'
                />

                <div className={style.line} style={progress ? { width: progress } : { opacity: 0 }}></div>

                <p className={style.title}>{name}</p>
            </Link>
        </li>
    );
}
