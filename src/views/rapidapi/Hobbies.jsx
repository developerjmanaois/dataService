import React, { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Hobbies = () => {

    const { makeRequest, isLoading, error, data } = useRequestData();

    useEffect( () => {

        makeRequest( "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", null, {

        'X-RapidAPI-Key': '08452eca22msh192b01cb4d0e155p176919jsn5b57860e881f',
        'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'

        } )

    }, [] )

  return (
    <div>
        <h1 className='mb-6 text-3xl font-bold text-center'>Hobby</h1>

        { isLoading && <Loader /> }
        { error && <Error /> }

        {
            data &&
            <div className='card'>
                <h2 className='mb-6 text-3xl font-bold text-center'>{ data.hobby }</h2>
                <a href={ data.link } target='_blank'>Læs mere om</a>
            </div>
        }
    

    </div>
  )
}

export default Hobbies
