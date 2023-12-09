import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const useRequestData = () => {

    const [ isLoading, setisLoading ] = useState( false );
    const [ data, setData ] = useState( null );
    const [ error, setError ] = useState( null );

    const makeRequest = async ( apiurl ) => {

        setisLoading( true )

        setTimeout( async () => {

            try {

                let response = await axios.get( apiurl )

                if ( response.data ) {

                    setData( response.data )
                    setError( null )

                } else {

                    throw new Error( "Empty response/no data" )

                }

            } catch ( error ) {

                console.log( error )
                setError( "Der er opstået en fejl: " + error.message )
                setData( null )

            } finally {

                setisLoading( false )

            }

        }, 2000);
    }

    return { data, isLoading, error, makeRequest }

}
export default useRequestData;