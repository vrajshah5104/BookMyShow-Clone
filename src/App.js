import './App.css';

// Importing Routers
import { Routes, Route } from 'react-router-dom';

// Importing React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importing all the Pages
import HomePage from './Pages/home.page';
import MoviePage from './Pages/movie.page';
import PlayPage from './Pages/play.page';

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