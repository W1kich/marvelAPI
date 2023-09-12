import './charInfo.scss';

import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelServices';
import {Link} from 'react-router-dom';
import setContent from '../../utils/setContent';

const CharInfo = (props) => {

	const [char, setChar] = useState(null);
	const {charId} = props;
	const {process, setProcess, getCharacter, clearError} = useMarvelService();

	useEffect(() =>{
		updateChar();
	}, [charId])


	const	onCharLoaded = (char) => {
		setChar(char);
	}
	
	const updateChar = () =>{
		clearError();
		if(!charId){
			return;
		}
		getCharacter(charId)
		.then(onCharLoaded)
		.then(() => setProcess("confirmed"));
	}

	return (
		<div className="char__info">
			{setContent(process,View ,char)}
		</div>
	)	
}

const View = ({data}) =>{
	const {id ,name, description, thumbnail, homepage, wiki, comics} = data;
	let imgFit = 'cover';

	if(thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'){
		imgFit = 'contain';
	}
	
	return(
		<>
			<div className="char__basics">
				<Link to={`/characters/${id}`}>
					<img src={thumbnail} alt={name} style={{ objectFit: `${imgFit}`}}/>
				</Link>
					<div>
							<div className="char__info-name">{name}</div>
							<div className="char__btns">
									<a href={homepage} className="button button__main">
											<div className="inner">homepage</div>
									</a>
									<a href={wiki} className="button button__secondary">
											<div className="inner">Wiki</div>
									</a>
							</div>
					</div>
			</div>
			<div className="char__descr">
				{description ? description : 'This character does not have a description'}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
					{comics.length > 0 ? null : 'This character does not have a comic'}
					{
						comics.map((item, i) =>{
							if(i>9) return null;
							
							return(
								<Link to={`/comics/${item.resourceURI.slice(43)}`} className="char__comics-item">
									<li key = {i} >
										{item.name} 
									</li>
								</Link>
							)
						})
					}
			</ul>
		</>
	)
}

export default CharInfo;