import { Modal, Form, Button } from "react-bootstrap";
import "./TaskList.css";

const EditTaskModal = ({
  showModal,
  setShowModal,
  updatedTask,
  setUpdatedTask,
  handleUpdateTask,
}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-1" controlId="title">
            <Form.Label className="fs-5 fw-semibold">Title</Form.Label>
            <Form.Control
              className="modal-data fw-medium"
              type="text"
              value={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="description">
            <Form.Label className="fs-5 fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              className="modal-data fw-medium"
              rows={3}
              value={updatedTask.description}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="status">
            <Form.Label className="fs-5 fw-semibold">Status</Form.Label>
            <Form.Control
              as="select"
              className="modal-data fw-medium"
              value={updatedTask.status}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
            >
              <option value="completed" className="modal-data fw-medium">Completed</option>
              <option value="incomplete" className="modal-data fw-medium">Incomplete</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-1" controlId="priority">
            <Form.Label className="fs-5 fw-semibold">Priority</Form.Label>
            <Form.Control
              as="select"
              className="modal-data fw-medium"
              value={updatedTask.priority}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, priority: e.target.value })
              }
            >
              <option value="low" className="modal-data">Low</option>
              <option value="medium" className="modal-data">Medium</option>
              <option value="high" className="modal-data">High</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="success" onClick={handleUpdateTask}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
