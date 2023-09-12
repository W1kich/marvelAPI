import setContent from "./setContent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppBaner from "../components/appBanner/AppBanner";
import useMarvelService from "../services/MarvelServices";

const SinglePage = ({Component, dataType}) => {
	const {id} = useParams();
	const [data, setData] = useState(null);
	const {getComic, getCharacter, clearError, process, setProcess} = useMarvelService();

	useEffect(() => {
			updateData();
	}, [id]);

	
	const onDataLoaded = (data) => {
		setData(data);
	}

	const updateData = () => {
			clearError();

			switch (dataType) {
				case 'comic':
					getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
					break;
				case 'character':
					getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
					break;
				default:
						return;
			}
	}

	return (
			<>
					<AppBaner/>
					{setContent(process, Component, data)}
			</>
	)
}

export default SinglePage;