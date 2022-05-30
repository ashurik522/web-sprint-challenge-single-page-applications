

function Cart({myState}) {
    if(!myState){
        return<h3>Add a pizza!</h3>
    }
    

    return(
        <div className="cart-container">
            <h1>Your order:</h1>
                <h3>Who it is for: {myState.name}</h3>
                <h3>Size: {myState.size}</h3>
                {
                    !!myState.toppings && !!myState.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {myState.toppings.map((top, idx) =>  <li key={idx}>{top}</li>
                            )}
                        </ul>
                    </div>
                }
                <h3>Special instructions {myState.special}</h3>
        </div>
    )
};

export default Cart;