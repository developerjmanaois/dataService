import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import PrevNext from "../../components/PrevNext";
import ItemsPerPage from "../../components/ItemsPerPage";

const Posts = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ itemsPerPage, setItemsPerPage ] = useState( 10 )
    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/posts" )

    }, [] )

    const sliceData = ( dataToSlice ) => {
        return dataToSlice.slice(( currentPage * ItemsPerPage ), ( currentPage* itemsPerPage + itemsPerPage ))
    }

    return (

        <div>

            <h1 className='text-center text-2xl font-bold mt-12'>JSONPlaceholder - Posts</h1>

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            <div className="flex justify-center">
                <ItemsPerPage setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage} options={[10, 20, 100]}/>
            </div>

            {/* <div>

                {
                    [ 5, 10, 20, 50, 100 ].map(o => (
                    
                    <button key={"btn" + o} className="btn" onClick={ () => {setItemsPerPage(o) ; setCurrentPage(0)} }>{o} pr. side</button> ))
                }
                <button className="btn" onClick={ () => {setItemsPerPage(10) ; setCurrentPage(0)} }>10 pr. side</button>
                <button className="btn" onClick={ () => {setItemsPerPage(20) ; setCurrentPage(0)} }>20</button>
                <button className="btn" onClick={ () => {setItemsPerPage(20) ; setCurrentPage(0)} }>100</button>
            </div> */}

            {
                data && 
                <div className="flex justify-center">
                    <PrevNext setCurrentPage={setCurrentPage} currentPage={currentPage} dataLength={data?.length} itemsPerPage={itemsPerPage}/>
                </div>
                // <>
                
                //     <button className="btn" onClick={ () => setCurrentPage( currentPage - 1 ) } disabled={ currentPage <= 0 }>Prev</button>
                //     <button className="btn" onClick={ () => setCurrentPage( currentPage + 1 ) } disabled={ currentPage + 1 >= Math.ceil( data.length / itemsPerPage ) }>Next</button>
                
                // </>
            }
            {/* ( ( currentPage * itemsPerPage ), ( currentPage * itemsPerPage + itemsPerPage ) ) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                { data && sliceData(data).map( p =>
            
                    <div className="card w-150 bg-base-100 shadow-xl">
                        <div className="card-body" key={p.id}>

                            <h2 className="card-title text-xl font-bold">{ p.title }</h2>
                            {/* <p>{ p.body }</p> */}
                            <p>{ p.id }</p>
                            <div className="card-actions">
                                <Link to={ "/post/" + p.id } className="btn">Læs mere</Link>
                            </div>

                        </div>
                    </div>
            
                ) }
            </div>

        </div>

    )

}
export default Posts;