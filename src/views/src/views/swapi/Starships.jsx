import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";


const Starships = () => {

    const { data, isLoading, error, makeRequest } = useRequestData(12);

    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect( () => {

        makeRequest( "https://swapi.dev/api/starships/?page=" + currentPage )

    }, [currentPage] )

    return (

        <div>

            <h1 className="text-center font-bold text-2xl mt-12 mb-4">SWAPI - Starships</h1>

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            <div className="flex justify-center">
                <button onClick={ () => setCurrentPage( currentPage - 1 ) } className="btn mr-1 mb-4" disabled={!data?.previous}>Previous</button>
                <button onClick={ () => setCurrentPage( currentPage + 1 ) } className="btn mb-4" disabled={!data?.next}>Next</button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                { data && data.results.map( ( s, i ) =>
            
                    <div key={ "starships" + i } className="card w-150 bg-base-100 shadow-xl">

                        <h2>{ s.name }</h2>
                        <ul>
                            <li>Model: {s.model}</li>
                            <li>Created: { new Date (s.created).toLocaleString("da-DK", { year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute:"2-digit" })}</li>
                            {/* .toLocaleString() */}
                        </ul>

                    </div>
            
                ) }
            </div>

        </div>

    )

}
export default Starships;

