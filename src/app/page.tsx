import Trailer from '../components/base/Trailer';
import New from '../components/base/New'
import Subscribe from '../components/base/Subscribe'
import TopFilms from '../components/base/TopFilms'
import Footer from '../components/base/Footer'

export default function Home() {
	return (
		<>
			<Trailer />
			<New />
			<Subscribe />
			<TopFilms />
			<Footer />
		</>
	);
}
