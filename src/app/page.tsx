import Trailer from '../components/base/Trailer';
import New from '../components/base/New';
import Subscribe from '../components/base/Subscribe';
import TopFilms from '../components/base/TopFilms';

export default function Home() {
	return (
		<>
			<div className='container-fluid'>
				<Trailer />
				<New />
			</div>
			<div className='container'>
				<Subscribe />
			</div>
			<div className='container-fluid'>
				<TopFilms />
			</div>
		</>
	);
}
