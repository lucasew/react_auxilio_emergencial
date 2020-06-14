import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import toast from '../../utils/toaster'

const NotFound = () => {
    let location = useLocation()
    let history = useHistory()
    toast.error(`The path ${location.pathname} is not found. Redirecting to home...`)
    history.push('/')
    return <h1>{location.pathname} not found</h1>
}

export default NotFound