import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("User created successfully!");

    navigate("/alltasks");

    setNewTask({
      title: "",
      description: "",
      status: "",
      priority: "",
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-black text-center mb-4 fw-bold">Add New Task</h3>
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <form className="form p-4 rounded-3" onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="fs-5 fw-semibold mb-1">Task Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-input"
                value={newTask.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1">
              <label className="fs-5 fw-semibold mb-1">Task Description</label>
              <div className="form-floating">
                <textarea
                  placeholder="Description"
                  style={{ height: "100px" }}
                  className="form-input"
                  name="description"
                  value={newTask.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="mb-1">
              <label className="fs-5 fw-semibold mb-1">Status</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="completed"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">Completed</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="incomplete"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">Incomplete</span>
                </label>
              </div>
            </div>
            <div className="mb-1">
              <label className="fs-5 fw-semibold mb-1">Priority</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">Low</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">Medium</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">High</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button type="submit" variant="success">
                Add Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
