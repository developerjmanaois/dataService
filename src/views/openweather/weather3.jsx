import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import postnrJSON from './postnumre.json';
import Weathercard from './Weathercard';

const Weather3 = () => {

    // https://api.openweathermap.org/data/2.5/weather?zip=8000,dk&appid=d67effa013a7380f994c8d74b052d3d6

    const { makeRequest, isLoading, data, error } = useRequestData();
    const { makeRequest: makeRequestDAWA, isLoading: isLoadingDAWA, data: dataDAWA, error: errorDAWA } = useRequestData();

    // const makeRequestDAWA = useRequestData();

    const [ zip, setZip ] = useState("8000");
    const [ valid, setValid ] = useState( true );

    useEffect( () => {

        if ( valid ) {
            
            makeRequest( "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&appid=d67effa013a7380f994c8d74b052d3d6", "GET" )
            
        }

    }, [zip] )

    useEffect( () => {

      makeRequestDAWA( "https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip )

    }, [ zip ] )

  return (
    <div>
      
        <h1 className='my-4'>HejVejret for en udvalgt by - fx Grenå (8500)</h1>

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
              dataDAWA?.map( d =>
              
                  <option value={ d.postnummer.nr } key={ d.postnummer.nr }>
                      { d.tekst }
                  </option>

              )
          }

        </datalist>

        { data && <Weathercard data={data} />}

    </div>
  )
}

export default Weather3;
