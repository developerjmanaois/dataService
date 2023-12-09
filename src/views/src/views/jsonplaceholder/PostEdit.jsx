import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

const PostEdit = () => {

    const { postID } = useParams();

    const { data, isLoading, error, makeRequest } = useRequestData();
    const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

    const [ title, setTitle ] = useState( "" )
    const [ body, setBody ] = useState( "" )
    const [ userId, setUserId ] = useState( "" )

    useEffect( () => {

        makeRequest( "https://jsonplaceholder.typicode.com/posts/" + postID )

    }, [] )

    useEffect( () => {

        if(data) {
            setTitle(data.title)
            setBody(data.body)
            setUserId(data.userId)
        }

    }, [data] )

    const handleSubmit = e => {

        e.preventDefault();

        const rettetPost = { title, body, userId }

        makeRequestPUT( "https://jsonplaceholder.typicode.com/posts/" + postID, "PUT", rettetPost )

    }

    return (

        <div>

            <h1 className="mb-6 text-3xl font-bold text-center">JSONPlaceholder - Edit/update Posts</h1>

            { (error || errorPUT) && <Error /> }
            { (isLoading || isLoadingPUT) && <Loader /> }

            {
                dataPUT &&
                    <div className="card">
                        <div className="card-body"><h2>Post er rettet!</h2>
                        <p>Title: { dataPUT.title }</p>
                        <p>Body: { dataPUT.body }</p>
                        <p>Users Id: { dataPUT.userId }</p></div>
                    </div>
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
                    className="input input-bordered w-full" />
                
                <label htmlFor='txtBody' className="mt-4">Body</label>
                <textarea 
                    id='txtBody'
                    onInput={ e => setBody( e.target.value ) }
                    value={ body }
                    required
                    placeholder="Body" 
                    className="textarea textarea-bordered w-full" />
                
                <label htmlFor='txtUser' className="mt-4">ID på user</label>
                <input 
                    id='txtUser'
                    onInput={ e => setUserId( e.target.value ) }
                    value={ userId }
                    required type='number'
                    placeholder="Users Id" 
                    className="input input-bordered w-full" />

                <button type='submit' className='mt-4 btn'>Opret ny post</button>

            </form>

        </div>

    )

}
export default PostEdit;