import Skeleton from "../components/skeleton/Skeleton";
import Spinner from "../components/spinner/Spinner";
import ErrorMasage from "../components/errorMasage/ErrorMasage";

const setContent = (process,Component ,data) =>{
	switch(process){
		case "waiting":
			return <Skeleton/>;
		case "loading":
			return <Spinner/>;
		case "confirmed":
			return <Component data={data}/>;
		case "error":
			return <ErrorMasage/>;
		default:
			throw new Error('Unexpected process state');
	}
}

export default setContent;