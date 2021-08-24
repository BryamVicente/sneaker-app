import React, {Component} from 'react'

class Sneaker extends Component {

    render(){
        return(

            <div>
                <p>{this.props.sneaker.name}</p>
             

            </div>
        )
    }
}

export default Sneaker