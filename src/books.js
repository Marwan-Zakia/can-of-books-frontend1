import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Carousel from 'react-bootstrap/Carousel'

class books extends Component {
    render() {
        return (
            <div>
                <Carousel style={ {width: '300px'} } >
                    <Carousel.Item style={ {width: '300px'} }>
                        <img
                           style={ {width: '300px'} }
                            src={this.props.item.status}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{this.props.item.title}</h3>
                            <p>{this.props.item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default books;
