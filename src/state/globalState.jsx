import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props){
    const [cart, setCart]= useState([]);
    const [shoppingList, setShoppingList]=useState([]);
    const [user, setUser] = useState ({id:43, name:"Eloim"})

    function addProductToCart(prod){
        let found = false;
        let copy = cart.map((p)=>{
            if (p._id === prod._id){
                found=true;
                return {...prod, quantity: p.quantity+1}
            }
            return p;
        });
        if (!found) {
            copy.push({...prod})
        }
        setCart(copy);
    }

    function removeProductFromCart(_id){
        const updatedCart = cart.filter((product) => product._id !==_id);
        setCart(updatedCart);
    }

    return (
        <DataContext.Provider value={{
            cart:cart,
            shoppingList:shoppingList,
            user:user,

            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,

        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalState;