import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Books from './Books';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdatedModel from './Components/UpdatedModel';
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
      modalshow: false,
      title : '',
      description : '',
      status : '',
      bookid : '',
      updatemodel: false
    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`https://cobooks.herokuapp.com/books?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }
  addBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const useremail = user.email;
    const obj = {
      authoremail: useremail,
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value

    }
    console.log(obj)
    axios
      .post(`https://cobooks.herokuapp.com/addbook`, obj)
      .then(result => {
        this.setState({
          booksArr: result.data,
        })
      })
      .catch(err => {
        console.log('Error on adding data');
      })
  }
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`https://cobooks.herokuapp.com/deletebook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting a book');
      })
  }
  handleShow = () => {
    this.setState({
      modalshow: true,
    })
  }

  handleClose = () => {
    this.setState({
      modalshow: false, 
    })

  }
  handleShow1 = () => {
    this.setState({

      updatemodel: true
    })
  }

  handleClose1 = () => {
    this.setState({
     
      updatemodel: false
    })

  }
  
  showUpdateForm = (item) => {
    this.setState({
      title : item.title,
      description : item.description,
      bookid : item._id,
      status: item.status,
      updatemodel: true

    })
  }
  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const useremail = user.email;
    const obj = {
      authoremail: useremail,
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      updatemodel: false
    }

    axios
    .put(`https://cobooks.herokuapp.com/updatebook/${this.state.bookid}`,obj)
    .then(result =>{
      this.setState({
        booksArr:result.data,
      
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }


  render() {
    return (
      <>
  <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <Button variant="primary" onClick={this.handleShow}>
          Add A Book
        </Button>

        <Modal show={this.state.modalshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.addBook} >
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the name of the book" name='title' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the description of the book" name='description' />
              </Form.Group>


              <Form.Group >
                <Form.Label>Filter</Form.Label>
                <Form.Control as="select" size="sm" custom name='status'>
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
   <UpdatedModel   show = {this.state.updatemodel}
       handleClose = {this.handleClose1}
       title = {this.state.title}
       catBreed = {this.state.description}
       status = {this.state.status}
       updateBook = {this.updateBook}
    /> 
        <Row>
          {this.state.booksArr.map(item => {
            return (
              <Col>   <Books item={item} key={item.title} deleteBook={this.deleteBook} model={this.handleShow1}  updateBook={this.showUpdateForm} /> </Col>)
          })}
        </Row>
      </>



    )
  }
}

export default withAuth0(MyFavoriteBooks);
