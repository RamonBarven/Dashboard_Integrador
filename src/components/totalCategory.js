import React, {Component} from 'react';

class TotalCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            categorias: ""
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then(data => { this.setState({categorias: Object.keys(data.countByCategory).length})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        let contenido 
        if(this.state.categorias === ""){
            contenido=<h3>Cargando....</h3>
        } else {
            contenido=<h3><span>Number of Categories:</span> {this.state.categorias} </h3>
        }
        return(
            <div className='totalProductos'>
                {contenido}
            </div>
        )
    }
}

export default TotalCategory;