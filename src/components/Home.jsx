import {Link} from 'react-router-dom'
import Cart from './Cart';

const HomePage = (props) => {

    

    return(
        <div>
            <div className="top-image" >
                <Link className="img-link" to="/pizza">Get Pizza!</Link>
            </div>
            {props.myState.map(pizza=> {
              return <Cart key={pizza.id} pizza={pizza} />
            })}
            
        </div>
    )
}

export default HomePage;