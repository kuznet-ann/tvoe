'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import style from './Description.module.scss';

import infoIcon from '../../../app/images/icons/info.svg';

export default function Description({ data }) {
    const [active, setActive] = useState(1);
    const sections = ['Описание', 'О сериале', 'Съёмочная группа'];
    const info = data[0];
    return (
        <div>
            <ul className={style.list}>
                {sections.map((el, i) => (
                    <li
                        className={active == i ? `${style.item} ${style.active}` : style.item}
                        key={i}
                        onClick={() => setActive(i)}
                    >
                        {el}
                    </li>
                ))}
            </ul>

            <div className={style.wrapper}>
                <p className={active === 0 ? `${style.descr} ${style.active}` : style.descr}>{info.about}</p>
                <p className={active === 1 ? `${style.descr} ${style.active}` : style.descr}>{info.description}</p>
                <p className={active === 2 ? `${style.descr} ${style.active}` : style.descr}>{info.cast}</p>
                <p className={style.warning}>
                    <Image src={infoIcon} alt='' width={24} height={24} />
                    Контент может содержать сцены курения и употребления спиртных напитков. Курение
                    и чрезмерное употребление алкоголя вредит здоровью.
                </p>
                <Link className={style.link} href='#'>Сообщить о нарушении авторских прав</Link>
            </div>
        </div>
    );
}
