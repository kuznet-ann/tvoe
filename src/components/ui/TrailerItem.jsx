import Image from 'next/image';
import React from 'react';

import style from '../base/Trailer/Trailer.module.scss';
import Link from 'next/link';

export default function HistoryItem({ id, image, progress }) {
    // const imgPath = require(image);
    return (
        <li className={style.item}>
            <Image
                src={image}
                width={256}
                height={144}
                alt=''
            />
            <div
                className={style.line}
                style={{ width: `${progress}` }}></div>
        </li>
    )
}
