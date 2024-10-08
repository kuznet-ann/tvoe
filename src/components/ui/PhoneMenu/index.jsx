'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './PhoneMenu.module.scss'

import home from '../../../app/images/icons/home.svg'
import films from '../../../app/images/icons/films.svg'
import serials from '../../../app/images/icons/serials.svg'
import tv from '../../../app/images/icons/tv.svg'

export default function PhoneMenu() {
    const pathname = usePathname();
    return (
        <nav className={style.navigation}>
            <ul className={style.list}>
                <li className={`${style.item} ${pathname === '/' ? style.active : ''}`}>
                    <Link className={style.link} href='/'>
                        <Image src={home} alt='' />
                        <p>Главная</p></Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} href='#'>
                        <Image src={films} alt='' />
                        <p>Фильмы</p></Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} href='#'>
                        <Image src={serials} alt='' />
                        <p>Сериалы</p></Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} href='#'>
                        <Image src={tv} alt='' />
                        <p>ТВ</p></Link>
                </li>
            </ul>
        </nav>
    )
}
