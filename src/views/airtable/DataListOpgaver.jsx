import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const DataList = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://api.airtable.com/v0/applS4D4AEwrxunyQ/Table%201?maxRecords=20&view=Grid%20view", "GET", null,

        { "Authorization": "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY1 }
        
        )

    }, [] )

    return (

        <div>

            <h1 className='text-center text-2xl font-bold my-12'>Data List</h1>

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            <div className="grid grid-cols-4 gap-4">

                { data && data.records.map( p => 

                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        
                        {p.fields.Images && p.fields.Images.map( image => (
                            <figure>
                                <img
                                key={image.id}
                                src={image.url}
                                alt={image.filename}
                                width={image.thumbnails.large.width}
                                height={image.thumbnails.large.height}
                                />
                            </figure>
                        ))}

                        <div className="card-body" key={ p.id }>
                            <h2 className="card-title">{ p.fields.Name }</h2>
                            <p>
                                Category: <br /> 
                                <span>{ p.fields.Category }</span>
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ) }
            
            </div>
        </div>
    )

}
export default DataList;

