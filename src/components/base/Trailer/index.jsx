'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import style from './Trailer.module.scss';

import TrailerList from '../../ui/TrailerList';
import NameImg from '../../ui/NameImg';

import black from '../../../app/images/blacking.png';
import nameAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/name.png';
import bannerAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/banner.png';
import coverAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/cover.png';

import focus from '/src/app/images/films/focus/cover.png';
import instantFamily from '/src/app/images/films/instant-family/cover.png';
import thisMeansWar from '/src/app/images/films/this-means-war/cover.png';
import revengeOfTheBridesmaids from '/src/app/images/films/revenge-of-the-bridesmaids/cover.png';
import whileYouWereSleeping from '/src/app/images/films/while-you-were-sleeping/cover.png';
import getOnUp from '/src/app/images/films/get-on-up/cover.png';
import stragerThings from '/src/app/images/films/strager-things/cover.png';
import Image from 'next/image';

const trailers = [
    {
        id: 1,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: coverAvatarTheLastAirbender.src,
        progress: '69%',
        premiere: false,
        link: '/serial-description',
        rating: 7.9,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 2,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: focus.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 8.9,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 3,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: instantFamily.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 8.4,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 4,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: thisMeansWar.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 8.3,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 5,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: revengeOfTheBridesmaids.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 7.9,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 6,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: whileYouWereSleeping.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 9.1,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 7,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: getOnUp.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 7.4,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
    {
        id: 8,
        img_name: nameAvatarTheLastAirbender.src,
        img_banner: bannerAvatarTheLastAirbender.src,
        img_cover: stragerThings.src,
        progress: '0%',
        premiere: false,
        link: '/serial-description',
        rating: 8.0,
        year: '2024',
        genre: 'Фентези',
        country: 'США',
        age_limit: '16+',
    },
];

export default function Trailer() {
    const par = useSearchParams();
    return (
        <section className={style.section}>
            <NameImg data={trailers} />
            <div className={style.wrapper}>
                <TrailerList trailers={trailers} />
            </div>
            <Image
                className={style.black}
                src={black}
                alt='Затемнение'
                width={0}
                height={0}
                sizes='100vw'
            />
            {trailers.map((el, i) =>
                el.id === 1 ? (
                    <Image
                        key={i}
                        className={style.banner}
                        src={el.img_banner}
                        alt='Баннер'
                        width={0}
                        height={0}
                        sizes='100vw'
                    />
                ) : (
                    ''
                ),
            )}
        </section>
    );
}
