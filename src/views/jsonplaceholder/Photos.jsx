import React from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrevNext from '../../components/PrevNext';
import ItemsPerPage from '../../components/ItemsPerPage';

const Photos = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ itemsPerPage, setItemsPerPage ] = useState( 10 )
    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/photos" )

    }, [] )

    // useEffect( () => {

    //    if(data && data.length)

    // }, [] )

  return (
    <div>

    <h1 className='text-center text-2xl font-bold mt-12 mb-8'>JSONPlaceholder - Photos</h1>

    { isLoading && <Loader /> }
    { error && <h2>Error ...</h2> }

    
    <div className="flex justify-center">
        <ItemsPerPage setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage} options={[10, 20, 100]}/>
    </div>

    <div className="flex justify-center">
        <PrevNext setCurrentPage={setCurrentPage} currentPage={currentPage} dataLength={data?.length} itemsPerPage={itemsPerPage}/>
    </div>
    
        {/* {
            [ 5, 10, 20, 50, 100 ].map(o => (
            
            <button key={"btn" + o} className="btn" onClick={ () => {setItemsPerPage(o) ; setCurrentPage(0)} }>{o} pr. side</button> ))
        } */}
        {/* <button className="btn" onClick={ () => {setItemsPerPage(10) ; setCurrentPage(0)} }>10 pr. side</button>
        <button className="btn" onClick={ () => {setItemsPerPage(20) ; setCurrentPage(0)} }>20</button>
        <button className="btn" onClick={ () => {setItemsPerPage(20) ; setCurrentPage(0)} }>100</button> */}
    

    {/* {
        data && 

        <>

            <PrevNext setCurrentPage={setCurrentPage} currentPage={currentPage} dataLength={data.length} itemsPerPage={itemsPerPage}/>
        
            <button className="btn" onClick={ () => setCurrentPage( currentPage - 1 ) } disabled={ currentPage <= 0 }>Prev</button>
            <button className="btn" onClick={ () => setCurrentPage( currentPage + 1 ) } disabled={ currentPage + 1 >= Math.ceil( data.length / itemsPerPage ) }>Next</button>
        
        </>
    } */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        { data && data.slice( ( currentPage * itemsPerPage ), ( currentPage * itemsPerPage + itemsPerPage ) ).map( p =>
        
            <div className="card" key={p.id}>

                <h2 className="text-xl font-bold">{ p.title }</h2>
                {/* <p>{ p.body }</p> */}
                <img src={p.thumbnailUrl} alt="" loading="lazy"/>
                <p>{ p.id }</p>
                <Link to={ "/post/" + p.id } className="btn">Læs mere</Link>

            </div>
        
        ) }</div>

    </div>
  )
}

export default Photos
