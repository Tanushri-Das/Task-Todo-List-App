// import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";

// const AllTasks = () => {
//   const [tasks, setTasks] = useState([]);

//   // Load tasks from local storage when the component mounts
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//     setTasks(storedTasks);
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-center">All Tasks</h2>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th className="text-center fs-5">Title</th>
//             <th className="text-center fs-5">Description</th>
//             <th className="text-center fs-5">Status</th>
//             <th className="text-center fs-5">Priority</th>
//             <th className="text-center fs-5">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr>
//               <td className="text-center fw-semibold data">{task.title}</td>
//               <td className="text-center fw-semibold data">
//                 {task.description}
//               </td>
//               <td className="text-center fw-semibold data">{task.status}</td>
//               <td className="text-center fw-semibold data">{task.priority}</td>
//               <td className="text-center fw-semibold data">
//                 <Button variant="warning">Edit</Button>
//                 <Button variant="danger" className="ms-2">
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default AllTasks;


















// import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import EditTaskModal from './EditTaskModal'; // Import the modal component
// import toast from "react-hot-toast";

// const AllTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [updatedTask, setUpdatedTask] = useState({
//     title: "",
//     description: "",
//     status: "",
//     priority: "",
//   });

//   // Load tasks from local storage when the component mounts
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//     setTasks(storedTasks);
//   }, []);

//   // Function to handle opening the modal for editing a task
//   const handleEditTask = (task) => {
//     setSelectedTask(task);
//     setUpdatedTask({ ...task });
//     setShowModal(true);
//   };

//   // Function to handle updating the task
//   const handleUpdateTask = () => {
//     const updatedTasks = tasks.map((task) =>
//       task === selectedTask ? updatedTask : task
//     );
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     setShowModal(false);
//   };

//   // Function to handle deleting a task
//   const handleDeleteTask = (task) => {
//     const updatedTasks = tasks.filter((t) => t !== task);
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     toast.error("Deleted user successfully!");
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-center">All Tasks</h2>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th className="text-center fs-5">Title</th>
//             <th className="text-center fs-5">Description</th>
//             <th className="text-center fs-5">Status</th>
//             <th className="text-center fs-5">Priority</th>
//             <th className="text-center fs-5">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={index}>
//               <td className="text-center fw-semibold data">{task.title}</td>
//               <td className="text-center fw-semibold data">
//                 {task.description}
//               </td>
//               <td className="text-center fw-semibold data">{task.status}</td>
//               <td className="text-center fw-semibold data">{task.priority}</td>
//               <td className="text-center fw-semibold data">
//                 <Button
//                   variant="warning"
//                   onClick={() => handleEditTask(task)}
//                 >
//                   Edit
//                 </Button>
//                 <Button 
//                   variant="danger" 
//                   className="ms-2"
//                   onClick={() => handleDeleteTask(task)} // Add onClick handler for delete
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Modal for editing task */}
//       <EditTaskModal 
//         showModal={showModal} 
//         setShowModal={setShowModal} 
//         updatedTask={updatedTask} 
//         setUpdatedTask={setUpdatedTask} 
//         handleUpdateTask={handleUpdateTask} 
//       />
//     </div>
//   );
// };

// export default AllTasks;















