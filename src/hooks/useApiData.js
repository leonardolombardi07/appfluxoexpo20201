import { useState, useEffect } from 'react';
import convertCoordNameToEndPoint from '../constants/functions/convertCoordNameToEndPoint';
import { HerokuApiGetAuth } from '../apis/HerokuApi';


export default (coord_name) => {
    const [results, setResults] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const getData = async () => {
        const endPoint = convertCoordNameToEndPoint(coord_name);
        try {
            const response = await HerokuApiGetAuth.get(endPoint);
            setResults(response.data)

        } catch (error) {
            alert("Requisição em getData no arquivo useApiData falhou")
            setErrorMessage("Requisição em getData no arquivo useApiData falhou")
        };
    };

    useEffect (() => {
        getData()
    }, []);

    return [results, errorMessage];
}