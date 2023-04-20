import './App.css';
import axios from 'axios';

// Importing Routers
import { Routes, Route } from 'react-router-dom';

// Importing React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importing all the Pages
import HomePage from './Pages/home.page';
import MoviePage from './Pages/movie.page';
import PlayPage from './Pages/play.page';

// Calling the baseURL and the api key here only instead of calling it hundred times in the home.page
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["?api_key="] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<PlayPage/>} />
    </Routes>
  );
}

export default App;