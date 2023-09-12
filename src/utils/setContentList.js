import Spinner from "../components/spinner/Spinner";
import ErrorMasage from "../components/errorMasage/ErrorMasage";

const setContentList = (process, Component ,newItemLoading) =>{
	switch(process){
		case "waiting":
			return <Spinner/>;
		case "loading":
			return newItemLoading ? <Component/> : <Spinner/>;
		case "confirmed":
			return <Component/>;
		case "error":
			return <ErrorMasage/>;
		default:
			throw new Error('Unexpected process state');
	}
}

export default setContentList