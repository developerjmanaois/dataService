import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { useParams, Link } from "react-router-dom";

const Post = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  const { postID } = useParams();

  useEffect(() => {

makeRequest("https://jsonplaceholder.typicode.com/posts/" + (postID || 1));

  }, []);

  return (

    <div>

      <h1 className="mt-12 mb-6 text-3xl font-bold text-center">
        JSONPlaceholder - Udvalgt Post
      </h1>

      {isLoading && <Loader />}
      {error && <h2>Error ...</h2>}

      <div className="card w-auto bg-base-100 shadow-xl">
        
        { data &&

        <div className="card" key={ data.id }>
          <h2 className="text-xl font-bold">{ data.title }</h2>
          <p>{ data.body }</p>
          <p>{ data.id }</p>
        </div>

        }

       <Link to="/posts" className="btn">&lt;&lt; Tilbage til alle posts</Link></div>
    
      </div>
  
  );

};

export default Post;
