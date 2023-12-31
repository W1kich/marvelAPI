import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../singleComicLayout/SingleComicLayout'));
const SingleCharLayout = lazy(() => import('../singleCharLayout/SingleCharLayout'));
const SinglePage = lazy(() => import('../../utils/SinglePage'));


const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path="/marvelAPI/" element={<MainPage/>}/>
							<Route path="/marvelAPI/comics" element={<ComicsPage/>}/>
							<Route path="/marvelAPI/comics/:id" element={ <SinglePage Component ={SingleComicLayout} dataType='comic'/>}/>
							<Route path="/marvelAPI/characters/:id" element={<SinglePage Component={SingleCharLayout} dataType='character'/>}/>
							<Route path='*' element={<Page404/>}/>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
		)
}

export default App;