import React from 'react'

import style from './Rating.module.scss'

export default function Rating({ data }) {
    const info = data[0];
    return (
        <div className={style.rating}>
            <p className={style.rate}>{info.rating}</p>
            <div className={style.wrapper}>
                <h4 className={style.title}>Как тебе сериал?</h4>
                <p className={style.text}>Оценка улучшит твои рекомендации</p>
                <ul className={style.list}>
                    <li className={style.item}>1</li>
                    <li className={style.item}>2</li>
                    <li className={style.item}>3</li>
                    <li className={style.item}>4</li>
                    <li className={style.item}>5</li>
                    <li className={style.item}>6</li>
                    <li className={style.item}>7</li>
                    <li className={style.item}>8</li>
                    <li className={style.item}>9</li>
                    <li className={style.item}>10</li>
                </ul>
            </div>
        </div>
    )
}
