import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const LoveCalc = () => {

    const { makeRequest, isLoading, error, data } = useRequestData();

    const [ name1, setName1 ] = useState( "" );
    const [ name2, setName2 ] = useState( "" );

    const handleCalculation = () => {

        makeRequest( "https://love-calculator.p.rapidapi.com/getPercentage", "GET", null,
        
            {
                'X-RapidAPI-Key': '08452eca22msh192b01cb4d0e155p176919jsn5b57860e881f',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            },

            {
                fname: name1, sname: name2
            }
        
        )

    } 
 
    // useEffect( () => {

    //     makeRequest( "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", null, {

    //     'X-RapidAPI-Key': '08452eca22msh192b01cb4d0e155p176919jsn5b57860e881f',
    //     'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'

    //     } )

    // }, [] )

  return (
    <div>
        <h1 className='mb-6 text-3xl font-bold text-center'>Love Calculator</h1>

            <div className='my-4'>
                <p><small>Med RapidApi - Love Calculator</small></p>
            </div>
        <div>

            <input onInput={ e => setName1( e.target.value ) } required type='text' placeholder='Skriv navn' className="input input-bordered input-secondary w-200 max-w-xs mr-3"/>
            <input onInput={ e => setName2( e.target.value ) } required type='text' placeholder='Skriv navn' className="input input-bordered input-primary w-200 max-w-xs"/>

            <button onClick={ () => handleCalculation() } className="btn btn-active btn-secondary ml-3">&#9829; Beregn</button>
        </div>

        { isLoading && <Loader /> }
        { error && <Error /> }

        {
            data &&
            <div className="card w-96 bg-base-100 shadow-xl mt-6">
                <article className='card-body'>
                    <h2 className="card-title">{ data.fname } og { data.sname }</h2>
                    <p>{ data.percentage } %</p>
                    <p>Match: { data.result }</p>
                </article>
            </div>
        }
    

    </div>
  )
}

export default LoveCalc;
