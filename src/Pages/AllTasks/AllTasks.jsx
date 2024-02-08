import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import EditTaskModal from "./EditTaskModal";
import "./TaskList.css";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });
  const [filterPriority, setFilterPriority] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setUpdatedTask({ ...task });
    setShowModal(true);
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowModal(false);
  };

  const handleMarkCompleted = (task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, status: "completed" } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filteredTasks =
    filterPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);
  const totalTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">All Tasks</h2>
      <div className="mb-4 text-center">
        <p className="fs-5 fw-semibold">Total Tasks : {totalTasksCount}</p>{" "}
        <p className="fs-5 fw-semibold">
          Completed Tasks : {completedTasksCount}
        </p>
      </div>
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <Form.Select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="mb-4 fw-semibold fs-6"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </Form.Select>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center fs-5">Title</th>
            <th className="text-center fs-5">Description</th>
            <th className="text-center fs-5">Status</th>
            <th className="text-center fs-5">Priority</th>
            <th className="text-center fs-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td className="text-center fw-semibold data">{task.title}</td>
              <td className="text-center fw-semibold data">
                {task.description}
              </td>
              <td className="text-center fw-semibold data">{task.status}</td>
              <td
                className={`text-center fw-semibold data ${
                  task.priority === "low"
                    ? "text-warning"
                    : task.priority === "medium"
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {task.priority}
              </td>
              <td className="text-center fw-semibold d-flex justify-content-center align-items-center">
                <Button
                  variant="success"
                  className="data fw-semibold"
                  onClick={() => handleMarkCompleted(task)}
                >
                  Mark as Completed
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleEditTask(task)}
                  className="ms-2 data fw-semibold text-white"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteTask(task)}
                  className="ms-2 data fw-semibold"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
};

export default AllTasks;
