import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <nav>
            <h1 className="title">Lambda Eats</h1>
            <div className='link-container'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' id="order-pizza" to="/pizza">Order</Link>
                <Link className='nav-link' to="/cart">Cart</Link>
            </div>

        </nav>

    )
};

export default Header;