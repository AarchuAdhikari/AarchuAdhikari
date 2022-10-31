import "./App.css";
import { Title } from "./components/Title";

import { Col, Container, Row } from "react-bootstrap";
import { CustomeCard } from "./components/CustomeCard";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    setMovieList([...movieList, movie]);
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm func={addMovie} />
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
