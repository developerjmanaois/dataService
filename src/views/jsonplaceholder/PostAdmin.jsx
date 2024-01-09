import React from "react";

import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";

const PostAdmin = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/posts/" )

    }, [] )

    const handleDelete = ( postID, postTitle ) => {

        if ( window.confirm( "Er du sikker på at du vil slette:" + postTitle ) ) {

            makeRequestDelete( "https://jsonplaceholder.typicode.com/posts/" + postID, "DELETE" )

        }

    }

    return (

        <div>

            <h1 className="mb-6 text-3xl font-bold text-center my-16">JSONPlaceholder - ADMINPost</h1>

            { dataDelete && <h2>Du har netop slettet en Post</h2> }

            { isLoading && <Loader /> }
            { error && <h2>Error ...</h2> }

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><Link to={ "/postcreate/" } className="btn"><FaPlus size="1.5em" color="darkgreen"/></Link></th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>RET</th>
                        <th>SLET</th>
                    </tr>
                </thead>
                
                <tbody>

                    {
                        data && data.map( p => 
                            
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td><Link to={ "/postedit/" + p.id } className="btn"><FaEdit size="2em" color="darkgreen"/></Link></td>
                                <td><button><FaTrash onClick={ () => handleDelete( p.id, p.title ) } size="2em" color="darkred" className="cursor-pointer"/></button></td>
                            </tr>
                        
                        )
                    }

                </tbody>

            </table>

        </div>

    )

}
export default PostAdmin;