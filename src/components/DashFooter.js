import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = <button onClick={onGoHomeClicked}>Home</button>
    }

    const content = (
        <footer>
            {goHomeButton}
            <p>Current User</p>
            <p>Status</p>
        </footer>
    )

    return content

}

export default DashFooter