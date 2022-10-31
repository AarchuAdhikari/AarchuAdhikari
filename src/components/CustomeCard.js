import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomeCard = ({ movie, func }) => {
  console.log(movie);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.imdbRating}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => func({ ...movie, type: "happy" })}
            variant="danger"
          >
            Happy
          </Button>
          <Button
            onClick={() => func({ ...movie, type: "Lazy" })}
            variant="danger"
          >
            Lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
