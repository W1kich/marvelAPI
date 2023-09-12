import {useEffect, useState} from 'react';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from '../../services/MarvelServices';
import setContent from '../../utils/setContent';

const RandomChar = (props) =>{

	const [char, setChar] = useState({});
	const {process, setProcess, getCharacter, clearError} = useMarvelService();

	useEffect(() =>{
		updateChar();
		
		const timerID = setInterval(updateChar, 60000);

		return () =>{
			clearInterval(timerID);
		}
	}, [])

	const onCharLoaded = (char) => {
		setChar(char);
	}

	const updateChar = () =>{
		clearError();
		const id = Math.floor(Math.random() *(1011400 - 1011000) + 1011000);
		getCharacter(id)
		.then(onCharLoaded)
		.then(() => setProcess("confirmed"));;
	}

	return (
		<div className="randomchar">
				{setContent(process, View, char)}
				<div className="randomchar__static">
						<p className="randomchar__title">
								Random character for today!<br/>
								Do you want to get to know him better?
						</p>
						<p className="randomchar__title">
								Or choose another one
						</p>
						<button onClick={updateChar} className="button button__main">
								<div className="inner">try it</div>
						</button>
						<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
				</div>
		</div>
	)
}

const View = ({data}) =>{
	const {name, description, thumbnail, homepage, wiki} = data;

	const onTryDesc = (desc) =>{
		if(typeof(desc) !== 'string'){
			return desc;
		}else{
			if(desc === ''){
				return "This character does't have a description";
			}else if(desc.length > 227){
				return desc.slice(0, 212) + '...';
			}
		}
		return desc;
	}

	const desc = onTryDesc(description);
	let imgFit = 'cover';

	if(thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'){
		imgFit = 'contain';
	}

	return(
		<div className="randomchar__block">
				<img src={thumbnail} alt="Random character" className="randomchar__img" style={{ objectFit: `${imgFit}`}}/>
				<div className="randomchar__info">
						<p className="randomchar__name">{name}</p>
						<p className="randomchar__descr">
								{desc}
						</p>
						<div className="randomchar__btns">
								<a href={homepage} className="button button__main">
										<div className="inner">homepage</div>
								</a>
								<a href={wiki} className="button button__secondary">
										<div className="inner">Wiki</div>
								</a>
						</div>
				</div>
		</div>
	)
}

export default RandomChar;