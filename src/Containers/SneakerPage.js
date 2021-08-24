import React, {Component} from 'react'
import SneakerContainer from './SneakerContainer'

class SneakerPage extends Component {

    state = {
        sneakers: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/sneakers')
        .then(resp => resp.json())
        .then(data => this.setState({sneakers:data}))
    }

    render(){
        
        return(
            <div>
                <h1>This is the Page!</h1>
                <SneakerContainer sneakers={this.state.sneakers}/>
            </div>

        )
    }
}

export default SneakerPage