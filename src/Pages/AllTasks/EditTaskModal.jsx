import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const EditTaskModal = ({ showModal, setShowModal, updatedTask, setUpdatedTask, handleUpdateTask }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={updatedTask.description}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={updatedTask.status}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
            >
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={updatedTask.priority}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, priority: e.target.value })
              }
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateTask}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
