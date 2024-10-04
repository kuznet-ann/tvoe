import React from 'react'
import NewLItem from './NewLItem'

import style from '../base/New/New.module.scss'

import mufasaTheLionKing from '/src/app/images/films/mufasa-the-lion-king/cover.png';
import amphibia from '/src/app/images/films/amphibia/cover.png';
import tooOldToDieYoung from '/src/app/images/films/too-old-to-die-young/cover.png';
import jokerFolieADeux from '/src/app/images/films/joker-folie-a-deux/cover.png';
import aGoodGirlsGuideToMurder from '/src/app/images/films/a-good-girls-guide-to-murder/cover.png';
import theHollow from '/src/app/images/films/the-hollow/cover.png';
import despicableMe4 from '/src/app/images/films/despicable-me-4/cover.png';

export default function NewList({ data }) {
    data[0].img_cover = mufasaTheLionKing.src;
    data[1].img_cover = amphibia.src;
    data[2].img_cover = tooOldToDieYoung.src;
    data[3].img_cover = jokerFolieADeux.src;
    data[4].img_cover = aGoodGirlsGuideToMurder.src;
    data[5].img_cover = theHollow.src;
    data[6].img_cover = despicableMe4.src;
    return (
        <ul className={style.list}>
            {data.map((el, i) =>
                <NewLItem key={i} data={el} />
            )}

        </ul>
    )
}
