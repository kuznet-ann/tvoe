import Image from 'next/image';
import React from 'react';

import style from './TrailerItem.module.scss';
import Link from 'next/link';

export default function Video({ image = '', link = '#', progress = '' }) {
    return (
        <li className={style.item} >
            <Link
                href={link}
                className={style.link}>
                <Image className={style.img}
                    src={image}
                    width={0}
                    height={0}
                    sizes='100vw'
                    alt='Обложка трейлера'
                />
                <div
                    className={style.line}
                    style={{ width: `${progress}` }}></div>
            </Link>
        </li>
    );
}
