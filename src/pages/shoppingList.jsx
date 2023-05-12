import { useState } from 'react';
import "./shoppingList.css";
import ShoppingListItem from './shoppingListItem';

const ShoppingList = ()=>{
    const [item, setItem] = useState({});
    const [allItems, setAllItems] = useState([]);

    const handleTextChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...item};
        copy[name] = value;
        setItem(copy);
    };

    const addItem = () =>{
        console.log(item);

        let copy = [...allItems];
        copy.push(item);
        setAllItems(copy);

    };

    function handleDelete(item){
        console.log("deleting", item);

        let copy = allItems.filter(x => x.name != item.name)
        setAllItems(copy);
        
    }



    //create a function, and console.log the text of the item when the user click on the del button

    return (
        <div className = "shopping-list">
            <h1> My Shopping List </h1>

            <div className="form">
                <input type="text" name="name" onBlur={handleTextChange} />
                <button className='btb btn-sm btn-outline-dark' onClick={addItem}> Add Item</button>
            </div>

            <div className = "list">
                {allItems.map(item => <ShoppingListItem key={item.name} data={item} onDelete={handleDelete}/>)}
            </div>
        </div>
    );

};

export default ShoppingList;