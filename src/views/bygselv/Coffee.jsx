import React from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrevNext from '../../components/PrevNext';
import ItemsPerPage from '../../components/ItemsPerPage';

const Coffee = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ itemsPerPage, setItemsPerPage ] = useState( 8 )
    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://api.sampleapis.com/coffee/hot" )

    }, [] )

    // useEffect( () => {

    //    if(data && data.length)

    // }, [] )

  return (
    <div>

    <h1 className='text-center text-2xl font-bold mt-12 mb-8'>Menu</h1>

    { isLoading && <Loader /> }
    { error && <h2>Error ...</h2> }

    
    <div className="flex justify-center">
        <ItemsPerPage setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage} options={[10, 20]}/>
    </div>

    <div className="flex justify-center">
        <PrevNext setCurrentPage={setCurrentPage} currentPage={currentPage} dataLength={data?.length} itemsPerPage={itemsPerPage}/>
    </div>
    
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        { data && data.slice( ( currentPage * itemsPerPage ), ( currentPage * itemsPerPage + itemsPerPage ) ).map( c =>
        
            <div className="card" key={c.id}>

                <h2 className="text-xl font-bold my-2">{ c.title }</h2>
                {/* <p>{ p.body }</p> */}
                <img src={c.image} alt="" loading="lazy"/>

                <Link to={ "/readmore/" + c.id } className="btn my-6">Læs mere</Link>

            </div>
        
        ) }</div>

    </div>
  )
}

export default Coffee;
