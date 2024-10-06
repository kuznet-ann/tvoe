import React, { useState } from 'react';

import style from './EpisodesList.module.scss';
import VideoItem from '../VideoItem';

import placeholder from '/src/app/images/placeholder.png';

export default function EpisodesList({ data }) {
    const [active, setActive] = useState(0);
    return (
        <>
            <ul className={style.seasons}>
                <li
                    className={active == -1 ? `${style.item} ${style.active}` : style.item}
                    onClick={() => setActive(-1)}
                >
                    Трейлер
                </li>
                {data.map((el, i) => (
                    <li
                        className={active == i ? `${style.item} ${style.active}` : style.item}
                        key={i}
                        onClick={() => setActive(i)}
                    >
                        {el.season.order} сезон
                    </li>
                ))}
            </ul>

            <ul className={active === -1 ? `${style.list} ${style.active}` : style.list}>
                <VideoItem
                    name={'Заглушка'}
                    image={placeholder.src}
                />
            </ul>

            {data.map((item, i) => (
                <ul key={i} className={active === i ? `${style.list} ${style.active}` : style.list}>
                    {item.season.episodes.map((el, i) => (
                        <VideoItem
                            key={i}
                            name={el.name}
                            progress={el.progress}
                            image={el.cover}
                            link={el.link}
                            time={el.time}
                        />
                    ))}
                </ul>
            ))}
        </>
    );
}
