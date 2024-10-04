'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import style from './Menu.module.scss';

import Logo from '../../../app/images/logo.svg';
import Search from '../../../app/images/icons/search.svg';
import Install from '../../../app/images/icons/install.svg';
import Promocode from '../../../app/images/icons/promocodes.svg';

export default function Menu() {
    const pathname = usePathname();
    return (
        <header className={style.menu}>
            <div className={`container ${style.container}`}>
                <div className={style.wrapper}>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt='Логотип компании TVOЁ'
                        />
                    </Link>
                    <nav>
                        <ul className={style.list}>
                            <li className={`${style.item} ${pathname === '/' ? style.active : ''}`}>
                                <Link href='/'>Главная</Link>
                            </li>
                            <li
                                className={`${style.item} ${pathname === '/films' ? style.active : ''
                                    }`}>
                                <Link href='#'>Фильмы</Link>
                            </li>
                            <li
                                className={`${style.item} ${pathname === '/serials' ? style.active : ''
                                    }`}>
                                <Link href='#'>Сериалы</Link>
                            </li>
                            <li
                                className={`${style.item} ${pathname === '/tv' ? style.active : ''
                                    }`}>
                                <Link href='#'>ТВ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={`${style.wrapper} ${style.buttons}`}>
                    <button>
                        <Image
                            src={Install}
                            alt='Иконка установки'
                        />
                        Установить
                    </button>
                    <button className='primary'>7 дней за 0 ₽</button>
                    <button>
                        <Image
                            src={Promocode}
                            alt='Иконка промокода'
                        />
                        Промокод
                    </button>
                    <button className={style.btn}>
                        <Image
                            src={Search}
                            alt='Иконка поиска'
                        />
                    </button>
                    <Link className={style.link} href='#'>Войти</Link>
                </div>
            </div>
        </header>
    );
}
