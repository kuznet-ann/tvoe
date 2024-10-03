import React from 'react'

import style from './TopFilms.module.scss';
import TopFilmsList from '../../ui/TopFilmsList'

export default function index() {
    return (
        <section className={`container-fluid ${style.wrapper}`}>
            <h2 className={style.title}>ТОП-10 НЕДЕЛИ</h2>
            <TopFilmsList />
        </section>
    )
}
