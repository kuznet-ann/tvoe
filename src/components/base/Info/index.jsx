
import React from 'react';

import style from './Info.module.scss'
import Description from '../../ui/Description'
import Rating from '../../ui/Rating'

export default function Info({ data }) {


    return (
        <section className={style.section}>
            <Description data={data} />
            <Rating data={data} />
        </section>
    );
}
