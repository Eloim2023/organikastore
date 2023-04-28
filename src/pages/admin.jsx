import {useState} from 'react';
import "./admin.css";

function Admin(){
    const [product, setProduct] = useState({});

    function handleProductText(e){
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
    }

    return (
        <div className="page admin">
            <h2> Store Administration</h2>

            <div className="parent">
                <section id="secProducts">
                    <h4>Create Products</h4>
                  
                        <div className="mb-3">
                            <label className="form-label"> Title</label>
                            <input type="text" name="title" onBlur={handleProductText} className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"> Category</label>
                            <input type="text" name="category" onBlur={handleProductText} className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"> Price </label>
                            <input type="text" name="price" onBlur={handleProductText} className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"> Image </label>
                            <input type="text" name="image" onBlur={handleProductText} className="form-control"/>
                        </div>

                        <div className="mb-3 text-center">
                            <button onClick={saveProduct} className='btn btn-dark'> Save Product </button>
                        </div>

                </section>
            

                <section id="secCoupons">
                    <h4> Create Coupons</h4>
                </section>
            </div>
        </div>
    );
}
export default Admin;