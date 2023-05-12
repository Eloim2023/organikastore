import "./shoppingListItem.css";


function ShoppingListItem(props) {
    function handleClick(){
        props.onDelete(props.data);
    }

    return (
        <div className="shopping-item">
            <h4>{props.date.name}</h4>
            <button onClick={handleClick} className='btn btn-sm btn-outline-danger'>Del</button>
        </div>
    )
}

export default ShoppingListItem;