import './Header.css'

import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="header">
            <Link to="/">
                <h1>Portal JS News</h1>
            </Link>
        </div>
    )
}