import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Taskform.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Taskform = () => {
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

    navigate("/tasklist");

    setNewTask({
      title: "",
      description: "",
      status: "",
      priority: "",
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task Added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container my-5 vh-100">
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
                    value="incomplete"
                    onChange={handleChange}
                  />
                  <span className="ms-1 fw-medium">Incomplete</span>
                </label>
              </div>
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
              <Button type="submit" className="fw-semibold" variant="success">
                Add Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Taskform;
