import React from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {
    let history = useHistory()
    return (
        <h1 onClick={() => history.push('/')}>
            consulta dos beneficiários do auxílio emergencial
        </h1>
    )
}

export default Header