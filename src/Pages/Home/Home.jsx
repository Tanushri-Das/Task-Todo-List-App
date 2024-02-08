import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2 className="mb-4 fw-bold">Welcome to Todo List App</h2>
        <p className="data mb-4 fw-semibold">
          Do you want to add a task in the TodoList? Kindly click this button
        </p>
        <div className="see-products">
          <Link to="/taskform" className="productsList">
            <Button type="submit" className="fw-semibold data" variant="success">
              Add Task
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
