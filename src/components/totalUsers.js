import React, {Component} from 'react';

class TotalUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            usuarios: ""
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then(data => { this.setState({usuarios: data.count})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        let contenido 
        if(this.state.usuarios === ""){
            contenido=<h3>Cargando....</h3>
        } else {
            contenido=<h3><span>Number of Users:</span> {this.state.usuarios} </h3>
        }
        return(
            <div className='totalProductos'>
                {contenido}
            </div>
        )
    }
}

export default TotalUser;