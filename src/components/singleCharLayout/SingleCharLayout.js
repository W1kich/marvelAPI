import './singleCharLayout.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleCharLayout  = ({data}) =>{
	const {name, thumbnail,description} = data;
	return(
		<div className="single-char">
			<Helmet>
			<meta 
				name="descriptmeta"
				content={`${name}`}
			/>
			<title>{name}</title>
		</Helmet>
			<img src={thumbnail} alt={`${name}`} className="single-char__img"/>
					<div className="single-char__info">
							<h2 className="single-char__name">{name}</h2>
							<p className="single-char__descr">{description}</p>
					</div>
					<Link to="/marvelAPI/" className="single-char__back">Back to all</Link>
		</div>
	)
}

export default SingleCharLayout;