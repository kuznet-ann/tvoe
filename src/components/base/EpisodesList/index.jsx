'use client';
import React, { useState } from 'react';

import style from './EpisodesList.module.scss';
import VideoItem from '../VideoItem';

import placeholder from '/src/app/images/placeholder.png';
import episode1 from '/src/app/images/films/avatar-the-last-airbender/1_season/1.png';
import episode2 from '/src/app/images/films/avatar-the-last-airbender/1_season/2.png';
import episode3 from '/src/app/images/films/avatar-the-last-airbender/1_season/3.png';
import episode4 from '/src/app/images/films/avatar-the-last-airbender/1_season/4.png';
import episode5 from '/src/app/images/films/avatar-the-last-airbender/1_season/5.png';

const seasons = [
    {
        season: {
            order: 1,
            episodes: [
                {
                    name: 'Name',
                    cover: episode1.src,
                    link: '#',
                    progress: '50%',
                    time: 'time',
                },
                {
                    name: 'Name',
                    cover: episode2.src,
                    link: '#',
                    progress: '50%',
                    time: 'time',
                },
                {
                    name: 'Name',
                    cover: episode3.src,
                    link: '#',
                    progress: '',
                    time: 'time',
                },
                {
                    name: 'Name',
                    cover: episode4.src,
                    link: '#',
                    progress: '',
                    time: 'time',
                },
                {
                    name: 'Name',
                    cover: episode5.src,
                    link: '#',
                    progress: '',
                    time: 'time',
                },
            ],
        },
    },
    {
        season: {
            order: 2,
            episodes: [{ name: 'Заглушка', cover: placeholder.src }],
        },
    },
    {
        season: {
            order: 3,
            episodes: [{ name: 'Заглушка', cover: placeholder.src }],
        },
    },
];
export default function EpisodesList() {
    const [active, setActive] = useState(0);
    const episodeList = seasons[0].season.episodes;
    return (
        <section className={style.section}>
            <ul className={style.seasons}>
                <li
                    className={active == -1 ? `${style.item} ${style.active}` : style.item}
                    onClick={() => setActive(-1)}
                >
                    Трейлер
                </li>
                {seasons.map((el, i) => (
                    <li
                        className={active == i ? `${style.item} ${style.active}` : style.item}
                        key={i}
                        onClick={() => setActive(i)}
                    >
                        {el.season.order} сезон
                    </li>
                ))}
            </ul>

            {seasons.map((item, i) =>
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
            )}
        </section>
    );
}
