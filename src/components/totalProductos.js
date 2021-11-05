import React, {Component} from 'react';
import './totalProductos.css'

class TotalProductos extends Component {
    constructor(props){
        super(props)
        this.state = {
            productos: ""
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then(data => { this.setState({productos: data.count})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        let contenido 
        if(this.state.productos === ""){
            contenido=<h3>Cargando....</h3>
        } else {
            contenido=<h3><span>Number of Products:</span> {this.state.productos} </h3>
        }
        return(
            <div className='totalProductos'>
                {contenido}
            </div>
        )
    }
}

export default TotalProductos;