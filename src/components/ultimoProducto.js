import React, {Component} from 'react';
import './ultimoProducto.css'

class UltimoProducto extends Component {
    constructor(props){
        super(props)
        this.state = {
            ultimo: ""
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then(data => { 
            let lastOne = data.products.pop();
            this.setState({ultimo: lastOne})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        
        if(this.state.ultimo === ""){
            return(
                <div>
                    <h3>Cargando....</h3>
                </div>
            )
        } else {
            return(
                <div className='ultimo'>
                    <h3>Last Product added</h3>
                    <img className='imagen1' src='https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg' />
                    <p className='categoria'> {this.state.ultimo.categories.status}</p>
                    <p className='location'>{this.state.ultimo.location}</p>
                    <p className='description'> {this.state.ultimo.description}</p>
                </div>
            )
        }
        
    }
}

export default UltimoProducto;
