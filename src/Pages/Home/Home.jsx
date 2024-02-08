// import { Button } from "react-bootstrap";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         <h3 className="text-black text-center mb-4 fw-bold">Add New Task</h3>
//         <div className="col-12 col-md-8 col-lg-6 mx-auto">
//           <form className="form p-4 rounded-3">
//             <div className="mb-1">
//               <label className="fs-5 fw-semibold mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 className="form-input"
//               />
//             </div>
//             <div className="mb-1">
//               <label className="fs-5 fw-semibold mb-1">Description</label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 className="form-input"
//               />
//             </div>
//             <div className="mb-1">
//               <label className="fs-5 fw-semibold mb-1">Status</label>
//               <div>
//                 <label>
//                   <input type="radio" name="status" value="completed" />
//                   <span className="ml-2">completed</span>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <input type="radio" name="status" value="incomplete" />
//                   <span className="ml-2">incomplete</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-1">
//               <label className="fs-5 fw-semibold mb-1">Priority</label>
//               <div>
//                 <label>
//                   <input type="radio" name="status" value="low" />
//                   <span className="ml-2">low</span>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <input type="radio" name="status" value="medium" />
//                   <span className="ml-2">medium</span>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <input type="radio" name="status" value="high" />
//                   <span className="ml-2">high</span>
//                 </label>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center mt-4">
//               <Button
//                 type="submit"
//                 className="fw-semibold text-white register-btn"
//               >
//                 Add Task
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;















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
    priority: ""
  });

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;

    // Add the new task to the existing tasks
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("User created successfully!");
    // Navigate to the all tasks page
    navigate("/alltasks");

    // Reset form fields
    setNewTask({
      title: "",
      description: "",
      status: "",
      priority: ""
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-black text-center mb-4 fw-bold">Add New Task</h3>
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <form className="form p-4 rounded-3" onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="fs-5 fw-semibold mb-1">Title</label>
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
              <label className="fs-5 fw-semibold mb-1">Description</label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  style={{ height: "100px" }}
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
                  <span className="ml-2">Completed</span>
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
                  <span className="ml-2">Incomplete</span>
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
                  <span className="ml-2">Low</span>
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
                  <span className="ml-2">Medium</span>
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
                  <span className="ml-2">High</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button
                type="submit"
                variant="success"
              >
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

