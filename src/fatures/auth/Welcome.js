import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <p>
                <Link to="/dash/contacts">Contacts</Link>
            </p>
            <p>
                <Link to="/dash/users">Users</Link>
            </p>
        </div>
    )
}

export default Welcome