import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import News from './views/News';
import Post from './views/jsonplaceholder/Post';
import Posts from './views/jsonplaceholder/Posts';
import Photos from './views/jsonplaceholder/Photos';
import Todos from './views/jsonplaceholder/todos';
import Starships from './views/swapi/Starships';
import PostAdmin from './views/jsonplaceholder/PostAdmin';
import PostCreate from './views/jsonplaceholder/PostCreate';
import PostEdit from './views/jsonplaceholder/PostEdit';
import Everything from './views/newsapi/Everything';
import TopHeadlines from './views/newsapi/TopHeadlines';
import Weather from './views/openweather/Weather';
import Weather1 from './views/openweather/Weather1';
import Weather3 from './views/openweather/weather3';
import Weather4 from './views/openweather/weather4';
import Weathercard from './views/openweather/Weathercard';
import Pollution from './views/openweather/pollution';
import Hobbies from './views/rapidapi/Hobbies';
import LoveCalc from './views/rapidapi/LoveCalc';
import Facts from './views/rapidapi/Facts';
import Coffee from './views/bygselv/Coffee';
import ReadMore from './views/bygselv/ReadMore';
import DataList from './views/airtable/DataList';
import DataListOpgave from './views/airtable/DataListOpgaver';
import MernApi from './views/mernapi/MernApi';
import MyTodosCreate from './views/mernapi/MyTodosCreate';
import MyTodosEdit from './views/mernapi/MyTodosEdit';
import Mytodos from './views/mernapi/Mytodos';

function App () {

  // ROUTER PROVIDER
  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        {/* ---------------- PUBLIC ---------------- */ }
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="news" element={ <News /> } />
          <Route path="login" element={ <Login /> } />
          {/* MERN */}
          <Route path="mernapi" element={ <MernApi /> } />
          <Route path="mytodos" element={ <Mytodos /> } />
          <Route path="mytodoscreate" element={ <MyTodosCreate /> } />
          <Route path="mytodosedit/:todoID" element={ <MyTodosEdit /> } />
          <Route path="mytodosedit" element={ <MyTodosEdit /> } />
          {/* DataList */}
          <Route path="datalist" element={ <DataList /> } />
          <Route path="datalistopgave" element={ <DataListOpgave /> } />
          {/* BygSelv */}
          <Route path="coffee" element={ <Coffee /> } />
          <Route path="readmore" element={ <ReadMore /> } />
          <Route path="readmore/:postID" element={ <ReadMore /> } />
          {/* RapiApi */}
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="lovecalc" element={ <LoveCalc /> } />
          <Route path="facts" element={ <Facts /> } />
          {/* NewsApi */}
          <Route path="newseverything" element={ <Everything /> } />
          <Route path="topheadlines" element={ <TopHeadlines /> } />
          {/* SWAPI */}
          <Route path="starships" element={ <Starships /> } />
          {/* Open Weather */}
          <Route path="weather" element={ <Weather /> } />
          <Route path="weather1" element={ <Weather1 /> } />
          <Route path="weather3" element={ <Weather3 /> } />
          <Route path="weather4" element={ <Weather4 /> } />
          <Route path="weathercard" element={ <Weathercard /> } />
          <Route path="pollution" element={ <Pollution /> } />
          {/* JSONPlaceholder */}
          <Route path="posts" element={ <Posts /> } />
          <Route path="post/:postID" element={ <Post /> } />
          <Route path="post" element={ <Post /> } />
          <Route path="photos" element={ <Photos /> } />
          <Route path="todos" element={ <Todos /> } />
          <Route path="postadmin" element={ <PostAdmin /> } />
          <Route path="postcreate" element={ <PostCreate /> } />
          <Route path="postedit/:postID" element={ <PostEdit /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>
      </>
    )
  )

  return (
    <section>
      <RouterProvider router={ router } />
      {/* <h1>Forsiden</h1> */ }
    </section>


  )
}

export default App
