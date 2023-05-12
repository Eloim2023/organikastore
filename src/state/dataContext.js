import { createContext } from "react";

// context is a promise/interface/plan for the data that will be stored it should not have any implementation

const DataContext = createContext({
    cart:[],
    shoppingList:[],
    user:{},

    addProductToCart:() =>{},
    removeProductFromCart:()=>{},
});

export default DataContext;