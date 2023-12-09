import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import { formatDistanceToNow } from 'date-fns';
import { da } from 'date-fns/locale';


const Everything = () => {

  const { isLoading, data, error, makeRequest } = useRequestData();

  const [ searchKey, setSearchKey ] = useState( "denmark" );

  const [ language, setLanguage ] = useState( "en" );



  useEffect( () => {

    makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language + "&apiKey=3ce4eed9a78b4a22aadff41589164f32", "GET" )
    // makeRequest( `https://newsapi.org/v2/everything?q=${searchKey}&pageSize=50&language=en&apiKey=3ce4eed9a78b4a22aadff41589164f32`, "GET" )

  }, [language] )

  const handleSearch = e => {

    e.preventDefault()

    makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language + "&apiKey=3ce4eed9a78b4a22aadff41589164f32", "GET" )

  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-center mt-12">Nyheder - "Everything"</h1>

      { isLoading && <Loader/> }
      { error && <Error /> }

      <form onSubmit={ e => handleSearch(e) }>

        <input type="search" onChange={(e) => setSearchKey( e.target.value )} 
        placeholder='Søg noget' className='input input-bordered'/>
      
      </form>

      <div className='mt-4 mb-2'>
        <select onChange={ e => setLanguage( e.target.value ) }>
          <option value="ar">Arabisk</option>
          <option value="de">Tysk</option>
          <option value="da">Dansk</option>
          <option value="en">Engelsk</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {
          data && data.articles.map( n => 
            <div className='shadow-xl card bg-base-100' key={n.url}>
              <figure>
                <img src={n.urlToImage} alt="" />
              </figure>
              <div className='card-body'>
                <div className='card-title'>
                  <h2 className='text-4xl'>{n.title}</h2>
                </div>

                {/* time dateTime={n.publishedAt} */}
                
                <p className='text-gray-500 italic'>{new Date( n.publishedAt ).toLocaleString("da-DK", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit" })}</p>

                <p>{formatDistanceToNow(new Date( n.publishedAt ), {locale: da, addSuffix: true, includeSeconds: true})}</p>
                
                <h3 className='text-2xl'>{n.description}</h3>
            
                {n.content}
                
                <p>
                  <a href={ n.url } target='blank' rel='noopener noreferrer'>Læs mere ...</a>
                </p>
              </div>
            </div> 
          )
        }
      </div>

    </div>
  )
}

export default Everything
