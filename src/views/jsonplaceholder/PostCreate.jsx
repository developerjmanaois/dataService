import React from 'react'
import { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';


const PostCreate = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();
    const postID = useParams()

    const [ title, setTitle ] = useState( "" )
    const [ body, setBody ] = useState( "" )
    const [ userId, setUserId ] = useState( "" )

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/posts/" + postID )

    }, [] )

    const handleSubmit = e => {

        e.preventDefault();

        const nyPost = { title, body, userId }

        makeRequest( "https://jsonplaceholder.typicode.com/posts/", "POST", nyPost )

    }

  return (
    <div>
        <h1 className="mb-6 text-3xl font-bold text-center">JSONPlaceholder - Create Post</h1>

        {
            data && <h2>Ny er oprettet - den fik ID: { data.id }</h2>
        }

        <form className='form-control' onSubmit={ handleSubmit }>
            
            <label htmlFor='inpTitle'>Title</label>
            <input 
                id='inpTitle'
                type="text" 
                onInput={ e => setTitle( e.target.value )}
                value={ title }
                required
                placeholder="Title" 
                className="input input-bordered w-full max-w-xs" />
            
            <label htmlFor='txtBody' className="mt-4">Body</label>
            <textarea 
                id='txtBody'
                onInput={ e => setBody( e.target.value ) }
                value={ body }
                required
                placeholder="Body" 
                className="textarea textarea-bordered" />
            
            <label htmlFor='txtUser' className="mt-4">ID på user</label>
            <input 
                id='txtUser'
                onInput={ e => setUserId( e.target.value ) }
                value={ userId }
                required type='number'
                placeholder="Users Id" 
                className="textarea textarea-bordered" />

            <button type='submit' className='mt-4 btn'>Opret ny post</button>

        </form>
    </div>
  )
}

export default PostCreate
