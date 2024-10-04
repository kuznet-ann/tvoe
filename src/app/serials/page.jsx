import Banner from '../../components/base/Banner'

import nameAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/name.png';
import bannerAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/banner.png';
import coverAvatarTheLastAirbender from '/src/app/images/films/avatar-the-last-airbender/cover.png';

const filmInfo = [{
    name: 'Аватар: легенда об Аанге',
    img_name: nameAvatarTheLastAirbender.src,
    img_cover: coverAvatarTheLastAirbender.src,
    img_banner: bannerAvatarTheLastAirbender.src,
    year: '2024',
    genre: 'Фентези',
    duration: '',
    age_limit: '16+',
    rating: 7.9,
    premiere: true,
    country: 'США',
    overview:
        'Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.',
    description:
        '1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл. Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла — Майка. Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.',
    review: [
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text:
                'Первые сезоны были интересны и захватывающи, однако с каждым последующим сезоном сюжет начинал утрачивать свою остроту. Герои становились предсказуемыми, а некоторые сюжетные линии казались излишне запутанными. Тем не менее, сериал продолжает держать в напряжении, и некоторые эпизоды действительно увлекательны.',
        },
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text: 'Если отзыв очень короткий.',
        },
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text:
                'Если отзыв не слишком короткий, но помещается в выделенную для текста отзыва область и не выходит за её рамки. При этом кнопки «Читать дальше» нет.',
        },
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text:
                'Первые сезоны были интересны и захватывающи, однако с каждым последующим сезоном сюжет начинал утрачивать свою остроту. Герои становились предсказуемыми, а некоторые сюжетные линии казались излишне запутанными. Тем не менее, сериал продолжает держать в напряжении, и некоторые эпизоды действительно увлекательны.',
        },
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text: 'Если отзыв очень короткий.',
        },
        {
            name: 'Марфа',
            date: '2023-05-05',
            rating: 7,
            text:
                'Если отзыв не слишком короткий, но помещается в выделенную для текста отзыва область и не выходит за её рамки. При этом кнопки «Читать дальше» нет.',
        },
    ],
}];

export default function Page() {
    return <><Banner data={filmInfo} /></>;
}
