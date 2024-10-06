import React from 'react';
import Image from 'next/image';
import style from './Promo.module.scss';

import Advantages from '../../ui/Advantages';

export default function Promo() {
    return (
        <section className={style.card}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Попробуй 7 дней бесплатно</h1>
                <span className={style.text}>далее от 166 ₽/месяц по подписке</span>
            </div>
            <Advantages />
        </section>
    );
}
