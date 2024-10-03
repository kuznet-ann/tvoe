// import { Trailer } from '../components/base/Trailer';
import Trailer from '../components/base/Trailer';
import New from '../components/base/New'
import Subscribe from '../components/base/Subscribe'
import TopFilms from '../components/base/TopFilms'

export default function Home() {
	return (
		<>
			<Trailer />
			<New />
			<Subscribe />
			<TopFilms />
		</>
	);
}
