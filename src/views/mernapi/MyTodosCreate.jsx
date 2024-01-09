import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router-dom';

const MyTodosCreate = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();
    const { todoID } = useParams();

    useEffect( () => {

        makeRequest( "http://localhost:5000/todos/" + todoID )

    }, [] )

    const handleSubmit = e => {

        e.preventDefault();

        const fd = new FormData(e.target)

        makeRequest( "http://localhost:5000/todos", "POST", fd )

    }

  return (
    <div>
        <h1 className="mb-6 text-3xl font-bold text-center">MERN - Create Todo</h1>

        {
            data && <h2>Ny er oprettet - den fik ID: { data.created._id }</h2>
        }

        <form className='form-control' onSubmit={ handleSubmit }>
            
            <label htmlFor='inpTitle'>Title</label>
            <input 
                id='inpTitle'
                name='title'
                type="text" 
                required
                placeholder="Title" 
                className="input input-bordered w-full max-w-xs" />
            
            <label htmlFor='txtDescription' className="mt-4">Description</label>
            <textarea 
                id='txtDescription'
                name='description'
                required
                placeholder="Description" 
                className="textarea textarea-bordered" />

            <label htmlFor='inpImg' className="my-2">Vælg et billede</label>
            <input 
                id='inpImg'
                name='image'
                type="file" 
                required
                className='mb-2'
            />

            <div className='w-fit'>

                <label htmlFor="chkDone" className='mt-4 mr-4'>Udført</label>
                <input
                    type="checkbox"
                    id='chkDone'
                    name='done'
                    value='true'
                />
            </div>

            <button type='submit' className='mt-4 btn'>Opret ny post</button>

        </form>
    </div>
  )
}

export default MyTodosCreate
