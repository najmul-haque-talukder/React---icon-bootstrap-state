import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'

export default class State2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    

    incress = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decress = ()=>{
        this.setState({
            count : this.state.count - 1
        })
    }


  render() {
    return (
      <Card className='stateClass'>
        <Card.Header className='cardHeader'>Count : {this.state.count} </Card.Header>
         
         <Card.Body>
            <Button variant='success' onClick={this.incress}>Incress</Button>
            <Button variant='danger'  onClick={this.decress} disabled={this.state.count ===0 ? true : false}>Decress</Button>
         </Card.Body>
      </Card>
    )
  }
}
