import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    increment = ()=>{
         this.setState({
            count : this.state.count + 1
         })
    }


    decrement = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }


  render() {
    return (
      <Card className='stateClass'>
        <Card.Header className='cardHeader'> Value : {this.state.count}</Card.Header>

        <Card.Body>
        <Button variant="success" className='btn' onClick={this.increment} >Incress</Button>
        <Button variant="danger" className='btn' onClick={this.decrement} disabled={this.state.count===0 ? true : false}>Decress</Button>
        </Card.Body>
      </Card>
    )
  }
}
