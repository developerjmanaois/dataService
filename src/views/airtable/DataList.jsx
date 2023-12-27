import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const DataList = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://api.airtable.com/v0/appYwvTwTEKpth7nx/Data%20Service", "GET", null,

        { "Authorization": "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY }
        
        )

    }, [] )

    return (

        <div>

            <h1 className='text-center text-2xl font-bold mt-12'>Data List</h1>

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            
            <div className="card w-auto bg-base-100 shadow-xl">
        
                { data && data.records.map( p => 

                    <div className="card" key={ p.id }>
                    <h2 className="text-xl font-bold">{ p.fields.name }</h2>
                    <p>{ p.fields.start }</p>
                    <p>{ p.fields.deadline }</p>
                    </div>

                ) }

            </div>
        
        </div>

    )

}
export default DataList;
