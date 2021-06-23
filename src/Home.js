import {Link } from 'react-router-dom';
import './styles/home.css'
const Home = () => {
    return (
        <div className="Home">
            <h1>Home!</h1>
            <ul>
            <li>
                <Link to={'/'}> Home </Link>
                </li>
                <li>
                <Link to={'profile'}> Profile </Link>
                </li>
                <li>
                <Link to={'add'}> Add </Link>
                </li>
                </ul>
        </div>
    )
}

export default Home