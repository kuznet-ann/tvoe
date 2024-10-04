import React from 'react'
import Image from 'next/image'

import style from './Advantages.module.scss'

import film from '/src/app/images/icons/film.svg';
import phone from '/src/app/images/icons/phone.svg';
import star from '/src/app/images/icons/star.svg';
import like from '/src/app/images/icons/like.svg';

export default function Advantages({ width = 'auto' }) {
    return (
        <ul style={{ width: width }} className={style.list}>
            <li className={style.item}>
                <Image src={film} alt='Иконка видео плёнки' />
                Новинки каждую неделю
            </li>
            <li className={style.item}>
                <Image src={phone} alt='Иконка смартфона' />
                На любом устройстве
            </li>
            <li className={style.item}>
                <Image src={star} alt='Иконка звёздочки' />
                Без рекламы и доплат
            </li>
            <li className={style.item}>
                <Image src={like} alt='Иконка пальца вверх' />
                Эксклюзивная озвучка
            </li>
        </ul>
    )
}
