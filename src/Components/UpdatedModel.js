import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class UpdatedModel extends Component {
    render() {
        return (
            <div>
           <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateBook} >
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the new name of the book" name='title' defaultValue={this.props.title} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the new description of the book" name='description' defaultValue={this.props.description} />
              </Form.Group>


              <Form.Group >
                <Form.Label>Filter</Form.Label>
                <Form.Control as="select" size="sm" custom name='status' defaultValue={this.props.description}>
                  <option value="">All</option>
                  <option value="life changing">life changing</option>
                  <option value="top 5">top 5</option>
                  <option value="Recommended to me">Recommended to me</option>

                </Form.Control>
              </Form.Group>


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </Modal.Body>
        </Modal> 
            </div>
        );
    }
}

export default UpdatedModel;