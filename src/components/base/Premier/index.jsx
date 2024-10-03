import React from 'react';
import Image from 'next/image';

import style from './Premier.module.scss';

import film from '../../../app/images/icons/film.svg';
import phone from '../../../app/images/icons/phone.svg';
import star from '../../../app/images/icons/star.svg';
import like from '../../../app/images/icons/like.svg';
import premiers from '../../../app/images/premier_img.png';

export default function index() {
    return (
        <section className='container'>
            <div className={style.card}>
                <h1 className={style.title}>Смотри мировые премьеры</h1>
                <ul className={style.list}>
                    <li className={style.item}>
                        <Image
                            src={film}
                            alt=''
                        />
                        Новинки каждую неделю
                    </li>
                    <li className={style.item}>
                        <Image
                            src={phone}
                            alt=''
                        />
                        На любом устройстве
                    </li>
                    <li className={style.item}>
                        <Image
                            src={star}
                            alt=''
                        />
                        Без рекламы и доплат
                    </li>
                    <li className={style.item}>
                        <Image
                            src={like}
                            alt=''
                        />
                        Эксклюзивная озвучка
                    </li>
                </ul>
                <div className={style.wrapper}>
                    <button className={`primary ${style.btn}`}>Попробовать бесплатно</button>
                    <span className={style.text}>далее от 166 ₽/мес</span>
                </div>
                <Image className={style.img}
                    src={premiers}
                    alt=''
                />
            </div>
        </section>
    );
}
