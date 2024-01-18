import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        return (

            <div style={{ display: 'flex', gap: '3rem' }}>
                <span>{user.username}</span>
                <span>{userRolesString}</span>
                <button onClick={handleEdit}>
                    edit
                </button>
            </div>

        )

    } else return null
}
export default User