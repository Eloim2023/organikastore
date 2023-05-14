import {useEffect, useState} from 'react';
import "./admin.css";
import DataService from '../services/dataService';

function Admin(){
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const service = new DataService();

    useEffect(function(){
        loadProducts();
        loadCoupons();
    }, []);

    async function loadProducts(){
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProducts (prods);
    }

    async function loadCoupons(){
        let coupons = await service.getCoupons();
        setAllCoupons (coupons);
    }

    function handleProductText(e){
        const text = e.target.value;
        const name = e.target.name;


        // create copy, modify the copy, set the copy back 
        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
        let prodToSave = {...product}
        prodToSave.price = parseFloat(prodToSave.price)
        service.saveProduct(prodToSave);

        // create copy, modify the copy, set the copy back 
        let copy = [...allProducts];
        copy.push(prodToSave);
        setAllProducts(copy);

    }

    const handleCouponText = (e) =>{
        const value= e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    const saveCoupon = ()=>{
        console.log(coupon);
        let couponToSave = {...coupon}
        couponToSave.discount = parseFloat(couponToSave.discount)
        service.saveCoupon(couponToSave);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    const deleteCoupon = (code) =>{
        service.deleteCoupon(code);

        let copy = allCoupons.filter(c => c.code != code);
        setAllCoupons(copy);


    }

    const deleteProduct = (_id) =>{
        service.deleteProductById(_id);
        setAllProducts(allProducts.filter ( p=> p._id !== _id));
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

                        <ul className="prod-list">
                            {allProducts.map(prod=>
                            <li className='item' key={prod.title}>
                                <span>{prod.title} ${prod.price.toFixed(2)} </span>
                                <button onClick={() => deleteProduct(prod._id)} className='btn btn-sm btn-outline-danger'> Delete </button>
                            </li>)}
                        </ul>

                </section>
            

                <section id="secCoupons">
                    <h4> Create Coupons</h4>

                    <div className="mb-3">
                            <label className="form-label"> Code </label>
                            <input type="text" name="code" onBlur={handleCouponText} className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"> Discount </label>
                            <input type="number" name="discount" onBlur={handleCouponText} className="form-control"/>
                        </div>

                        <div className="mb-3 text-center">
                            <button onClick={saveCoupon} className='btn btn-dark'> Save Coupon </button>
                        </div>

                         <ul className="coupon-list">
                            {allCoupons.map(c => <li className='item' key={c.code}>
                            <span>{c.code} - {c.discount}</span> 
                            <button onClick={() => deleteCoupon(c.code)} className='btn btn-sm btn-outline-danger'> Delete </button></li>)}
                        </ul>

                </section>
            </div>
        </div>
    );
}
export default Admin;