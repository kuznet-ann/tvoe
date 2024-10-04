import Image from 'next/image';
import React from 'react';

import style from '../base/Trailer/Trailer.module.scss';
import Link from 'next/link';

export default function HistoryItem({ id, image, link, progress }) {
    // const imgPath = require(image);
    return (
        <li>
            <Link href={link} className={style.item}>
                <Image
                    src={image}
                    width={256}
                    height={144}
                    alt=''
                />
                <div
                    className={style.line}
                    style={{ width: `${progress}` }}></div>
            </Link>
        </li>
    )
}
