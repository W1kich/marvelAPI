import { useHttp } from "../Hooks/http.hook";

const useMarvelService  = () =>{
	const {request, clearError, process, setProcess} = useHttp();
	
	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=7de4f012d99c5c5bd16a21956155921f';
	const _baseOffset = 0;
	const _baseId = 1003;

	const getAllCharacters = async (offset = _baseOffset) => {
			const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
			return res.data.results.map(_transformCharcter);
	}

	const getCharacter = async (id) => {
			const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
			return _transformCharcter(res.data.results[0]);
	}

	const getCharacterByName = async (name) =>{ 
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharcter);
	}

	const _transformCharcter = (char) => {		
		return {
			id: char.id,
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items
			// ComicId: char.comics.
		}
	}

	const getAllComics = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);		
		return res.data.results.map(_transformComics);
	}

	const getComic = async (id = _baseId) => {
			const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
			return _transformComics(res.data.results[0]);
	}



const _transformComics = (comics) => {
	return {
		id: comics.id,
		title: comics.title,
		price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'NOT AVAILABLE',
		thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
		pageCount: comics.pageCount ? comics.pageCount : 'NOT FOUND',
		description: comics.textObjects.length === 0 ? 'NOT FOUND' : comics.textObjects[0].text,
		language: comics.textObjects.length === 0 ? 'NOT FOUND' : comics.textObjects[0].language
	}
}

	return {
		process, 
		setProcess,
		clearError, 
		getCharacter, 
		getAllCharacters,
		getAllComics, 
		getComic, 
		getCharacterByName
	};
}

export default useMarvelService;