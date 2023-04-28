
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

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;