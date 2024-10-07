'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import style from './Reviews.module.scss'
import ReviewsItem from '../../ui/ReviewsItem'

import arrow from '/src/app/images/icons/arrow.svg'

export default function Reviews({ data }) {
    const [right, setRight] = useState(0);
    const ref = useRef(null);
    let elWidth = 0;

    return (
        <section className={style.section}>
            <h3 className={style.title}>Отзывы <Image src={arrow} alt='Стрелка вправо' /></h3>
            <div onClick={() => { right >= (ref.current.offsetWidth - 1624) ? setRight(0) : setRight(right + 1624) }} className={style.arrow}>
                <Image src={arrow} alt='Стрелка вправо' />
            </div>
            <div className={style.wrapper}>
                <ul ref={ref} style={{ right: right }} className={style.list}>
                    {data.map((item, i) =>
                        <ReviewsItem key={i} item={item} />)}
                </ul>
            </div>
        </section>
    )
}
