'use client';

import React, { useState } from 'react';

import style from './Seasons.module.scss';
import EpisodesList from '../../ui/EpisodesList';

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

export default function Seasons() {
    return (
        <section className={style.section}>
            <EpisodesList data={seasons} />
        </section>
    )
}
