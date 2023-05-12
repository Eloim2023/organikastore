import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  //lets practice
  const [category, setCategory] = useState([]);

  const [prodsToDisplay, setprodsToDisplay] = useState([]);

  //when component loads, do something
  useEffect(function () {
    //console.log("catalog loaded");
    loadCatalog();
  }, []);
  
  async function loadCatalog() {
    //get the product from the service
    let service = new DataService();

    let prods = await service.getProducts();
    setProducts(prods);
    setprodsToDisplay(prods);

    let cats = await service.getCategories();
    setCategory(cats);
    
  }

  function filter(category) {
    console.log(category);

    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setprodsToDisplay(list);
  }

  // below heading 5 create a button
  //when clicked, call a test function
  //console message

  //render each category into a button

  /*
    function magicTest(){
        console.log("Hello from the button that we created")
        setProducts([]);//clear the array of the products
    } */

  return (
    <div className="page catalog">
      <h2>Check our amaizing catalog!</h2>
      <h5> We have {prodsToDisplay.length} products for you!! </h5>

      {category.map((c) => (
        <button
          key={c}
          onClick={() => filter(c)}
          className="btn btn-sm btn-primary btn-filter"
        >
          {c}
        </button>
      ))}
      <br />
      {prodsToDisplay.map((p) => (
        <Product key={p._id} data={p} />
      ))}
    </div>
  );
};

export default Catalog;
