'use client';

import React, { useState } from 'react';

import style from './ReviewsItem.module.scss';

export default function ReviewsItem({ item }) {
    const [isActive, setIsActive] = useState(false);

    function formatDate(str) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(str).toLocaleDateString('ru', options);
    }

    return (
        <li className={isActive ? `${style.item} ${style.active}` : `${style.item}`}>
            <div className={style.rate}>{item.rating}</div>
            <h4 className={style.title}>{item.name}</h4>
            <p className={style.date}>{formatDate(item.date)}</p>
            <p className={isActive ? `${style.text} ${style.active}` : `${style.text}`}>
                {isActive
                    ? item.text
                    : item.text.length > 180
                        ? item.text.slice(0, 134) + '...'
                        : item.text}
            </p>
            {item.text.length > 180 && !isActive ? (
                <div onClick={() => setIsActive(!isActive)} className={style.more}>
                    Читать дальше
                </div>
            ) : (
                ''
            )}
        </li>
    );
}
// 138
