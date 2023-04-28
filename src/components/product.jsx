import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect } from 'react';


function Product(props){

    useEffect(function (){
        console.log("hello, i'm a product");

    },[]);
    return (
        <div className="product">
            
            <img src={"/pictures/"+props.data.image} alt=""/>

            <h5> {props.data.title}</h5>

            <div className="prices">
                <label> Total {props.data.price.toFixed(2)}</label>
                <label> Price {props.data.price.toFixed(2)}</label>
            </div>
           <QuantityPicker/>
            <button> Add </button>
        </div>
    )
}

export default Product;
//render the product in the catalog