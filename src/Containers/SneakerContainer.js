import React, {Component} from 'react'
import Sneaker from '../ChildComponents/Sneaker'

class SneakerContainer extends Component {

    renderSneakers = () => {
        return this.props.sneakers.map(sneaker => <Sneaker sneaker={sneaker} />)
    }

    render(){
        return(

            <div>
                <h2>This is the Container!</h2>
                {this.renderSneakers()}
            </div>
        )
    }

}

export default SneakerContainer