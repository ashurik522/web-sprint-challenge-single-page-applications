import {Link} from 'react-router-dom'


const HomePage = (props) => {

    

    return(
        <div>
            <div className="top-image" >
                <Link className="img-link" to="/pizza">Get Pizza!</Link>
            </div>
        </div>
    )
}

export default HomePage;