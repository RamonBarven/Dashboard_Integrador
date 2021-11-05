import React, {Component} from 'react';
import './listProducts.css';

class ListaProductos extends Component {
    constructor(props){
        super(props)
        this.state = {
            lista: ""
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then(data => { this.setState({lista: data.products})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        if(this.state.lista === ""){
            return(
                <div>
                    <h3>Cargando....</h3>
                </div>
            )
        } else {
            return(
                <div className='lista'>
                    <div className='headers'>
                        <h3 className='uno'>Location</h3>
                        <h3 className='dos'>Category</h3>
                    </div>
                    <div className='listados'>
                    <ul className='uno'>
                        {this.state.lista.map((producto, i) => <li key={producto+i}> {producto.location}</li>)}
                    </ul>
                    <ul className='dos'>
                        {this.state.lista.map((producto, i) => <li key={producto+i}> {producto.categories.status}</li>)}
                    </ul>
                    </div>
                    
                </div>
            )
        }
    }
}

export default ListaProductos;