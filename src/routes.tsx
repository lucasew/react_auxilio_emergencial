import React from 'react'

import {Route, BrowserRouter, Switch, useHistory} from 'react-router-dom'

import Home from './pages/Home'
import ListBeneficiarios from './pages/ListBeneficiarios'
import NotFound from './pages/NotFound'

const Header = () => {
    let history = useHistory()
    return (
        <h1 onClick={() => history.push('/')}>
            consulta dos beneficiários do auxílio emergencial
        </h1>
    )
}


const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={ListBeneficiarios} path="/show-cidade/:cidadeId/:periodo" />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes