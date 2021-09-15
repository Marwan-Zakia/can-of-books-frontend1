import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
class books extends Component {
  render() {
    return (
      <div>
 <Container>
        <Card>
          <Card.Header as="h5">Books</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Text>
              {this.props.item.description}
            </Card.Text>
            <Card.Text>
             {this.props.item.status} 
            </Card.Text>
            <Button  onClick={() => this.props.deleteBook(this.props.item._id)} variant="primary">Go delete A Book</Button>
            <Button  onClick={() => this.props.updateBook(this.props.item)} variant="primary">Edit 📑</Button>
          </Card.Body>
        </Card>




       
  
</Container>
        {/* <Carousel>
          <Carousel.Item style={{ width: '300px' }}>
            <img
              style={{ width: '300px' }}
              src={this.props.item.status}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.item.title}</h3>
              <p>{this.props.item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

      </div>
    );
  }
}

export default books;















// eslint-disable-next-line no-lone-blocks
{/* <Carousel variant="dark">
          {this.state.booksArr.map(item => {
            return (
              <Carousel.Item style={ { height: '700px' , objectFit : 'scale-down'} }>
                <img
                  className="d-block w-100"
                  src={item.status}
                  alt={item.title}/>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item> )  })}
              </Carousel>    */}