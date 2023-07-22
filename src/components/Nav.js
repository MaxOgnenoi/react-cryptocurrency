import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>
                    Cryptoprices
                </div>
            </Link>
            <Link to='currencies'>
                <div>
                    Currencies
                </div>
            </Link>
        </div>
    )
}
