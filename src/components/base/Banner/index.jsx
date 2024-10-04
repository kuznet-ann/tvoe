import React from 'react';

import style from './Banner.module.scss';
import NameImg from '../../ui/NameImg';
import Image from 'next/image';

import heart from '/src/app/images/icons/heart.svg';
import share from '/src/app/images/icons/share.svg';
import soundOff from '/src/app/images/icons/sound_off.svg';
import fullscreen from '/src/app/images/icons/fullscreen.svg';
import black from '/src/app/images/blacking.png'

export default function index({ data }) {
    return (
        <section className={`container ${style.section}`}>
            <NameImg data={data} imgWidth={454} margin={230} />

            {data.map((el, i) => (
                <div className={style.info}>
                    <h2 className={style.title} key={i}>
                        Сериал {el.name} смотреть онлайн
                    </h2>
                    <p className={style.descr}>{el.overview}</p>
                </div>
            ))}

            <div className={style.wrapper}>
                <div className={style.btns}>
                    <button className='primary'>Смотреть бесплатно</button>
                    <button>
                        <Image src={heart} alt='Нравится' />
                    </button>
                    <button>
                        <Image src={share} alt='Поделиться' />
                    </button>
                </div>

                <div className={style.btns}>
                    <button><Image src={soundOff} alt='Отключить звук' /></button>
                    <button><Image src={fullscreen} alt='Полный экран' /></button>
                </div>
            </div>

            <Image className={style.black} src={black} alt='Затемнение' width={1920} height={594} />
            {data.map((el, i) => (
                <Image key={i} className={style.banner} src={el.img_banner} alt='Затемнение' width={1920} height={594} />
            ))}
        </section>
    );
}
