import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import { useParams, Link } from "react-router-dom";

const ReadMore = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  const { postID } = useParams();

  useEffect(() => {

makeRequest("https://api.sampleapis.com/coffee/hot/" + (postID || 1));

  }, []);

  return (

    <div>

      <h1 className="mt-12 mb-6 text-3xl font-bold">
        Menu
      </h1>

      {isLoading && <Loader />}
      {error && <h2>Error ...</h2>}

        
        { data &&
        <div className="card w-96 bg-base-100 shadow-xl image-full">

        
            <figure><img src={ data.image } alt="coffee"/></figure>
            <div className="card-body" key={ data.id }>
                <h2 className="card-title text-xl font-bold">{ data.title }</h2>
                <p>{ data.description }</p>
                <p>Ingredients: { data.ingredients }</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to="/coffee">&lt;&lt; Tilbage til alle posts</Link>
                    </button>
                </div>
            </div>

       </div>
        }

    
      </div>
  
  );

};

export default ReadMore;
