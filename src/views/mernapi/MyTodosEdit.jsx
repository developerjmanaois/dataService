import React, { useState, useEffect, useRef } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

const MyTodosEdit = () => {

    const refDone = useRef()

    const { todoID } = useParams();

    const { data, isLoading, error, makeRequest } = useRequestData();
    const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

    useEffect( () => {

        makeRequest( "http://localhost:5000/todos/" + todoID )

    }, [todoID] )

    const handleSubmit = e => {

        e.preventDefault();

        const fd = new FormData(e.target)

        if( refDone.current.checked === false ) {
            fd.append("done", false)
        }

        makeRequestPUT( "http://localhost:5000/todos/" + todoID, "PUT", fd )

    }

    return (

        <div>

            <h1 className="my-6 text-3xl font-bold text-center">MyTodo - Edit/update Posts</h1>

            { (error || errorPUT) && <Error /> }
            { (isLoading || isLoadingPUT) && <Loader /> }

            {
                dataPUT &&
                    <div className="card">
                        <div className="card-body">
                            <h2>Todo er rettet!</h2>
                            <p>Title: { dataPUT.updated.title }</p>
                            <p>Description: { dataPUT.updated.description }</p>
                        </div>
                    </div>
            }

            {
                data &&

                <form className='form-control' onSubmit={ handleSubmit }>
                    
                    <label htmlFor='inpTitle'>Title</label>
                    <input 
                        id='inpTitle'
                        type="text"
                        name="title" 
                        defaultValue={ data ? data.todo.title : null }
                        required
                        placeholder="Title" 
                        className="input input-bordered w-full" />
                    
                    <label htmlFor='txtDescription' className="mt-4">Description</label>
                    <textarea 
                        id='txtDescription'
                        name=""
                        defaultValue={ data.todo.description }
                        required
                        placeholder="Description" 
                        className="textarea textarea-bordered w-full" />

                    <div>
                        <figure>
                            <h4>Nuværende billede</h4>
                            <img src={"http://localhost:5000/images/" + ( dataPUT ? dataPUT.updated.image : data.todo.image )} width="70" alt="Nuværende todo-billede" />
                        </figure>
                    </div>
                    <label htmlFor='inpImg' className="my-2">Vælg et billede</label>
                    <input 
                        id='inpImg'
                        name='image'
                        type="file"
                        className='mb-2'
                    />
                    
                    <div className='w-fit'>

                        <label htmlFor='chkDone' className="mt-4 mr-4">Udført</label>
                        <input 
                            ref={ refDone }
                            type="checkbox" 
                            id="chkDone" 
                            name="done" 
                            defaultValue="true" 
                            defaultChecked={ data.todo.done } 
                            
                            //onChange={ e => e.checked ? setDone( true ) : setDone( false )} 
                            />

                    </div>
                    
                    

                    <button type='submit' className='mt-4 btn'>Ret Todo</button>

                </form>
            }


        </div>

    )

}
export default MyTodosEdit;