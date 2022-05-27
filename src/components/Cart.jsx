const Cart = (props) => {

    const { pizza } = props;

    return(
        <div className="cart-container">
            <h1>Your order:</h1>
                <h3>{pizza.name}</h3>
                <h3>{pizza.size}</h3>
                {
                    !!pizza.toppings && !!pizza.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {pizza.toppings.map((top, idx) => {
                                return <li key={idx}> {top}</li>
                            })}
                        </ul>
                    </div>
                }
                <h3>{pizza.special}</h3>
        </div>
    )
};

export default Cart;