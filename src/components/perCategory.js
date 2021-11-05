import React, {Component} from 'react';
import './perCategory.css'

class PerCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            sale: "",
            rent:"",
        }
    };
    componentDidMount(){
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then(data => { this.setState({sale: data.countByCategory.sale, rent: data.countByCategory.rent})})
        .catch(e => {console.log('error:'+e)})
    };

    render(){
        
        if(this.state.sale === "" || this.state.rent === ""){
            return(
                <div>
                    <h3>Cargando....</h3>
                </div>
            )
        } else {
            return(
                <div className='categorias'>
                    <h3><span>Sale:</span> {this.state.sale}</h3>
                    <h3><span>Rent:</span> {this.state.rent}</h3>
                </div>
            )
        }
        
    }
}

export default PerCategory;
