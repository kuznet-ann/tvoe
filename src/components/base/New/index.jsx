import React from 'react'

import style from './New.module.scss'
import newFilms from '../../../app/films.json';

import NewList from '../../ui/NewList'

export default function New() {
    return (
        <div className='container-fluid'>
            <h3 className={style.title}>Новинки</h3>
            <NewList data={newFilms} />
        </div>
    )
}
