import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { fetchData } from "../utils/axiosHelper";
import { CustomeCard } from "./CustomeCard";
export const SearchForm = () => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = async (func) => {
    func.preventDefault();
    setMovie({});
    setIsError(false);

    const { data } = await fetchData(form);
    if (data.Response === "True") {
      setMovie(data);
    } else {
      setIsError(true);
    }
  };
  return (
    <div className="bg-dark py-5 rounded p-2">
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col className="d-flex justify-content-center">
            <div
              className="d-flex justify-content-center"
              style={{ width: "60%" }}
            >
              <Form.Control
                onChange={handleOnChange}
                placeholder="Movie Name"
                required
              />
            </div>
          </Col>
          <div className="d-grid">
            <Button varient="primary" type="submit">
              Search
            </Button>
          </div>
        </Row>
      </Form>
      <div className="mt-3 d-flex justify-content-center">
        {" "}
        {movie.imdbID && <CustomeCard movie={movie} />}
        {isError && <Alert variant="danger">No movie found......</Alert>}
      </div>
    </div>
  );
};
