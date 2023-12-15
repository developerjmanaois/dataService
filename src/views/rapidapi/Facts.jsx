import React, { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Facts = () => {

    const { makeRequest, isLoading, error, data } = useRequestData();

    useEffect( () => {

        makeRequest( "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", "GET", null, {

        'X-RapidAPI-Key': '08452eca22msh192b01cb4d0e155p176919jsn5b57860e881f',
        'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'

        } )

    }, [] )

    return (

        <div>
            <h1 className='mb-6 text-3xl font-bold text-center'>Facts</h1>

            { isLoading && <Loader /> }
            { error && <Error/> }

            {
                data &&
                <div className='card'>
                    <h2 className='mb-6 text-3xl font-bold text-center'>{ data[0].fact }</h2>
                </div>
            }
        
        </div>
    
    )

}


export default Facts;
