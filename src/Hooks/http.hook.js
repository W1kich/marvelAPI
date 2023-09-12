import {useCallback, useState} from 'react';

export const useHttp = () =>{
	const [process, setProcess] = useState('waiting');

	const request = useCallback( async (url, method = 'GET', body = null, headers = {'Content-Type': 'aplication/json'}) =>{
		setProcess('loading');

		try{
			const respons = await fetch(url, {method, body, headers});

			if (!respons.ok) {
				throw new Error(`Could not fetch ${url}, status: ${respons.status}`);
			}

			const data = await respons.json();

			return data;			
		} catch(e){
			setProcess('error');
			throw e;
		}
	}, []);

	const clearError = useCallback(() =>{
		setProcess('waiting');
	}, []);
	
	return {request ,  clearError, process, setProcess}
}