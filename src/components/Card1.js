import React, {Component} from "react";



class Card extends Component{
    render(){
        return <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <hr/>
        </div>
    }
}


export default Card;