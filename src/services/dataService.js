import axios from 'axios';

let catalog = [
    {
    "title":"Milk",
    "price":123.03,
    "category":"Farm",
    "image":"Milk.jpg",
    "_id":"1",
},
{
    "title":"Cheese",
    "price":150.03,
    "category":"Farm",
    "image":"Cheese.jpg",
    "_id":"2",
},
{
    "title":"Beef",
    "price":250,
    "category":"Farm",
    "image":"Beef.jpg",
    "_id":"3",
},
{
    "title":"Avocado",
    "price":235.52,
    "category":"Patch",
    "image":"Avocado.jpg",
    "_id":"4",
},
{
    "title":"Celery",
    "price":50,
    "category":"Garden",
    "image":"Celery.jpg",
    "_id":"5",
},
{
    "title":"Bread",
    "price":75.2,
    "category":"Store",
    "image":"Bread.jpg",
    "_id":"6",
},
{
    "title":"Lemonade",
    "price":23,
    "category":"Store",
    "image":"Lemonade.jpg",
    "_id":"7",
},
{
    "title":"Coffee",
    "price":23,
    "category":"Store",
    "image":"Coffee.jpg",
    "_id":"8",
},

]

class DataService {
    serverURL = "http://127.0.0.1:5000";

    async getProducts(){
        //use this return to run FE without a BE
        //return catalog;

        //call server to retrieve products

        let results = await axios.get(this.serverURL + "/api/catalog");
        return results.data;
    }

    async getCategories(){
        let results = await axios.get(this.serverURL + "/api/categories");
        return results.data;
    }

    async getCoupons(){
        let results = await axios.get(this.serverURL + "/api/coupons");
        return results.data;
    }

    async saveProduct(prod){
        let results = await axios.post(this.serverURL + "/api/catalog", prod);
        return results.data;
    }

    async saveCoupon(coupon){
        let results = await axios.post(this.serverURL + "/api/coupons", coupon);
        return results.data;
    }

    async deleteCoupon(code){
        let results = await axios.delete(this.serverURL + "/api/coupons/" + code);
        return results.data;
    }

    async deleteProduct(title){
        let results = await axios.delete(this.serverURL + "/api/products/" + title);
        return results.data;
    }

    async deleteProductById(id){
        let results = await axios.delete(this.serverURL + "/api/products/byid/" + id);
        return results.data;
    }

}

export default DataService;