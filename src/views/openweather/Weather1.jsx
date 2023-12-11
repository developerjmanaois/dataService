import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import postnrJSON from './postnumre.json'

const Weather1 = () => {

    // https://api.openweathermap.org/data/2.5/weather?zip=8000,dk&appid=d67effa013a7380f994c8d74b052d3d6

    const { makeRequest, isLoading, data, error } = useRequestData();

    const [ zip, setZip ] = useState("8000");
    const [ valid, setValid ] = useState( true );

    useEffect( () => {

        if ( valid === true ) {
            
            makeRequest( "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&appid=d67effa013a7380f994c8d74b052d3d6", "GET" )
            
        }

    }, [zip] )

  return (
    <div>
      
        <h1 className='my-4'>Vejret for en udvalgt by - fx Grenå (8500)</h1>

        { isLoading && <Loader /> }
        { error && <Error /> }

        <input
            type="text"
            list='listPostnr'
            value={ zip }
            maxLength="4"
            onChange={ e => { setZip( e.target.value ); setValid( e.target.checkValidity() ) } }
            required
            pattern="[0-9]{4}"
            placeholder='tast et postnummer'
            className='w-full max-w-xs input input-bordered'
        />

        <datalist id='listPostnr'>
            {/* <option value="8000">8000 Århus</option>
            <option value="8500">8500 Grenå</option>
            <option value="8400">8400 Ebeltoft</option>
            <option value="8200">8200 Århus N</option> */}

            {
                postnrJSON.map( p =>
                
                    <option value={ p.postnr } key={ p.postnr }>
                        { p.postnr } { p.by }
                    </option>

                )
            }

        </datalist>

        { data && 

            <article className='w-1/2 mt-10 shadow-xl card bg-base-100'>
                <div className='card-body'>
                    <h2 className='my-4 text-2xl font-bold'>Vejret for { data.name }</h2>

                    <figure>
                        <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"}/>
                    </figure>

                    <ul className='ml-5 list-disc divide-y divide-gray-200'>
                        <li className='py-4'>
                            Temperatur: { Math.round( data.main.temp ) } &deg;C
                        </li>
                        <li className='py-4'>
                            Vindhastighed: { Math.round( data.wind.speed ) } m/sek
                        </li>
                        <li className='py-4'>
                            Vindretning: { data.wind.deg } <FaArrowDownLong  style={{ transform: "rotate(" + data.wind.deg + "deg)" }}/>
                            {/* Vindretning: { data.wind.deg } <FaArrowUpLong  style={{ transform: `rotate(${ data.win.deg }deg)` }}/> */}
                        </li>
                        <li className='py-4'>
                            Solen står op kl: { new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) }
                        </li>
                        <li className='py-4'>
                            Solen gå ned kl: { new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) }
                        </li>
                    </ul>
                </div>
            </article>

        }

    </div>
  )
}

export default Weather1;
