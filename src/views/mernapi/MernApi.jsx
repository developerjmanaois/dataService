import React from "react";

import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";

const MernApi = () => {

    const { data, isLoading, error, makeRequest } = useRequestData()

    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

    useEffect( () => {

        makeRequest( "http://localhost:5000/todos" )

    }, [dataDelete] )

    const handleDelete = ( todoID, todoTitle ) => {

        if ( window.confirm( "Er du sikker på at du vil slette: " + todoTitle ) ) {

            makeRequestDelete( "http://localhost:5000/todos/" + todoID, "DELETE" )

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
                      <th></th>
                      <th></th>
                      <th><Link to={ "/mytodoscreate/" } className="btn"><FaPlus size="1.5em" color="darkgreen"/></Link></th>
                  </tr>
                  <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>RET</th>
                      <th>SLET</th>
                  </tr>
              </thead>
              
              <tbody>

                  {
                      data && data.todos.map( p => 
                          
                          <tr key={p._id}>
                              <td>{p._id}</td>
                              <td>{p.title}</td>
                              <td><img src={ "http://localhost:5000/images/" + p.image } width="100" alt="" /></td>
                              <td>{p.description}</td>
                              <td><Link to={ "/mytodosedit/" + p._id } className="btn"><FaEdit size="2em" color="darkgreen"/></Link></td>
                              <td><FaTrash onClick={ () => handleDelete( p._id, p.title ) } size="2em" color="darkred" className="cursor-pointer"/></td>
                          </tr>
                      
                      )
                  }

              </tbody>

          </table>

        </div>

    )

}
export default MernApi;