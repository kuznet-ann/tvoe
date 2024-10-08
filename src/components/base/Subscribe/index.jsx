import React from 'react';
import Image from 'next/image';

import Advantages from '../../ui/Advantages'
import style from './Subscribe.module.scss';

import subscribe from '../../../app/images/subscribe_img.png';

export default function index() {
    return (
        <section>
            <div className={style.card}>
                <h1 className={style.title}>Смотри мировые премьеры</h1>
                <Advantages width={820} />
                <div className={style.wrapper}>
                    <button className={`primary ${style.btn}`}>Попробовать бесплатно</button>
                    <span className={style.text}>далее от 166 ₽/мес</span>
                </div>
                <Image className={style.img} src={subscribe} alt='' />
            </div>
        </section>
    );
}
