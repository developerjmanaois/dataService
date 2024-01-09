import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";


const Mytodos = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ isComplete, setIsComplete ] = useState(null);

    useEffect( () => {

        makeRequest( "http://localhost:5000/todos" )

    }, [] )

    return (

        <div>

            <h1 className='text-center text-2xl font-bold my-8'>JSONPlaceholder - Todos</h1>

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            <div className="flex justify-center mb-8">
                <button onClick={ () => setIsComplete(true) } className="btn mr-2">Vis alle udførte Todos</button>
                <button onClick={ () => setIsComplete(false) } className="btn mr-2">Vis alle ufventede Todos</button>
                <button onClick={ () => setIsComplete(null) } className="btn">Vis alle ufventede Todos</button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                { data && data.todos
                    .filter( t =>
                        isComplete === null ? true : isComplete ? t.completed === true : t.completed === false
                    ).map( t =>
            
                    <div key={t._id} className="card w-150 bg-base-100 shadow-xl">
                        
                        <figure>
                            <img src={ t.image ? "http://localhost:5000/images/" + t.image : "https://via.placeholder.com/250/92c952" } />
                        </figure>
                        
                        <div className="card-body">
                            <h2 className="card-title">TODO: { t.title }</h2>
                            <p>Id: { t._id }</p>
                            <div className="card-actions justify-end">
                                <p>Udført:
                                    <span className={t.completed ? "text-green-700" : "text-red-700"}>{t.completed ? "JEP" : "NIX"}</span>
                                </p>
                            </div>
                        </div>

                    </div>
            
                ) }
            </div>

        </div>

    )

}
export default Mytodos;
