import React from 'react';
import Image from 'next/image';

import style from './NameImg.module.scss';

import ShortInfo from '../ShortInfo';

export default function index({ data, imgWidth = 338 }) {
    return data.map((el, i) =>
        el.id === 1 ? (
            <div key={i}>
                <Image
                    className={style.img}
                    src={el.img_name}
                    alt='Название текстом'
                    width={imgWidth}
                    height={0}
                />
                <ShortInfo el={el} width={imgWidth} />
            </div>
        ) : (
            ''
        ),
    );
}
