import React from 'react'
import Image from 'next/image'

import style from './Reviews.module.scss'
import ReviewsItem from '../../ui/ReviewsItem'

import arrow from '/src/app/images/icons/arrow.svg'

export default function Reviews({ data }) {
    return (
        <section className={style.section}>
            <h3 className={style.title}>Отзывы <Image src={arrow} alt='Стрелка вправо' /></h3>
            <div className={style.arrow}>
                <div className={style.right}>
                    <Image src={arrow} alt='Стрелка вправо' />
                </div>
            </div>
            <div className={style.wrapper}>
                <ul className={style.list}>
                    {data.map((item, i) =>
                        <ReviewsItem item={item} />)}
                </ul>
            </div>
        </section>
    )
}
