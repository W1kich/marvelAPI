import error from './error.gif';

const ErrorMasage = () =>{
	return(
		<img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}
		src={error} alt="error"/>
	)
}

export default ErrorMasage;