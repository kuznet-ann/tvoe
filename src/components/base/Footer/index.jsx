import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './Footer.module.scss';

import telegram from '../../../app/images/social/telegram.svg';
import vk from '../../../app/images/social/VK.svg';
import youtube from '../../../app/images/social/youtube.svg';
import tiktok from '../../../app/images/social/tiktok.svg';
import rating from '../../../app/images/rating.png';
import logo from '../../../app/images/logo.svg';

export default function index() {
    return (
        <footer className={`container ${style.footer}`}>
            <div className={style.wrapper}>
                <button>Написать в поддержку</button>
                <div className={style.social}>
                    <Link className={style.link} href='#'>
                        Telegram
                        <Image src={telegram} alt='' />
                    </Link>
                    <Link className={style.link} href='#'>
                        ВКонтакте
                        <Image src={vk} alt='' />
                    </Link>
                    <Link className={style.link} href='#'>
                        Youtube
                        <Image src={youtube} alt='' />
                    </Link>
                    <Link className={style.link} href='#'>
                        TikTok
                        <Image src={tiktok} alt='' />
                    </Link>
                </div>
            </div>
            <div className={`${style.wrapper} ${style.line}`}>
                <nav className={style.navigation}>
                    <Link href='#'>Главная</Link>
                    <Link href='#'>Фильмы</Link>
                    <Link href='#'>Сериалы</Link>
                    <Link href='#'>ТВ</Link>
                    <Link href='#'>Контакты</Link>
                </nav>
                <ul className={style.navigation}>
                    <li>
                        <Link href='#'>Реферальная программа</Link>
                    </li>
                    <li>
                        <Link href='#'>Скачать приложение</Link>
                    </li>
                    <li>
                        <Link href='#'>Вопросы и ответы</Link>
                    </li>
                    <li>
                        <Link href='#'>Условия использования</Link>
                    </li>
                </ul>
            </div>
            <div className={style.copyrights}>
                <div className={style.rating}>
                    <Image src={rating} alt='' />
                    <p className={style.text}>
                        <span>2024, ООО «ТВОЁ ЛАЙВ»</span>
                        <span>Все права защищены.</span>
                    </p>
                </div>
                <Image className={style.logo} src={logo} alt='' />
            </div>
        </footer>
    );
}
