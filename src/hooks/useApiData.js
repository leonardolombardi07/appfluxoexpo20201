import { useState, useEffect } from 'react';
import convertCoordNameToEndPoint from '../constants/functions/convertCoordNameToEndPoint';
import { HerokuApiGetAuth } from '../apis/HerokuApi';


export default (coord_name) => {
    const [results, setResults] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchData = async () => {
        const endPoint = convertCoordNameToEndPoint(coord_name);
        try {
            const response = await HerokuApiGetAuth.get(endPoint);
            console.log(response.status)
            setResults(response.data)
            setErrorMessage(null)

        } catch (error) {
            console.log(error.message)
            alert(error.message)
            setErrorMessage("Requisição em getData no arquivo useApiData falhou")
        };
    };
  

    useEffect (() => {
        fetchData()
    });

    return [results, errorMessage, fetchData];
}