import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: []
    }
  }
  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = 'email1@gmail.com';
    axios
      .get(`http://localhost:3001/books?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }
  render() {
    return (
      <Jumbotron>

<h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>


        {this.state.booksArr.map(item => {
          return (
            <div>
<Carousel variant="dark">
  <Carousel.Item>
    <img
         className="d-block w-100"
         src={item.status}
         alt={item.title}
    />
    <Carousel.Caption>
    <h3>{item.title}</h3>
                  <p>{item.description}</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
            </div>
          )
        })
        
       
  }

      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
