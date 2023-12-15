import React, { useEffect, useState } from 'react'
import LeafletMap from '../../components/LeafletMap';
import useRequestData from '../../hooks/useRequestData';

const Pollution = () => {

    const { makeRequest, isLoading, error, data } = useRequestData();

    const [ lat, setLat ] = useState( 57 )
    const [ lon, setLon ] = useState( 15 )

    useEffect( () => {

        makeRequest( "http://api.openweathermap.org/data/2.5/air_pollution?lat=" + 56 + "&lon=" +10 + "&appid=d67effa013a7380f994c8d74b052d3d6" )

    }, [] )

  return (
    <div>
        <h1 className='my-4'>Pollution ud fra Koordinater</h1>

        <h2 className='text-2xl'>Pollution data</h2>

        { data &&
            <ul>
                <li>co: { data.list[0].components.co }</li>
                <li>no: { data.list[0].components.no }</li>
                <li>no: { data.list[0].components.no }</li>
                <li>no<sub>2</sub>: { data.list[0].components.no2 }</li>
                <li></li>
            </ul>
        }

        <LeafletMap 
            coord={[lat, lon]} 
            zoom="15"
            info="Pollution" 
            setLat={ setLat } 
            setLon={ setLon } />
    </div>
  )
}

export default Pollution;