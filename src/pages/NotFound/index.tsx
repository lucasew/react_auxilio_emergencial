import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import toast from '../../utils/toaster'

const NotFound = () => {
    let location = useLocation()
    let history = useHistory()
    toast.error(`O caminho '${location.pathname}' não foi encontrado. Indo para a página inicial...`)
    history.push('/')
    return <h1>{location.pathname} not found</h1>
}

export default NotFound