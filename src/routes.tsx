import React from 'react'

import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './pages/Home'
import ListBeneficiarios from './pages/ListBeneficiarios'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const Routes = () => {
    const location = new URL(window.location.href)
    let baseRoute = location.hostname.endsWith("github.io")
        ? "/react-auxilio-emergencial"
        : undefined
    return (
        <BrowserRouter basename={baseRoute}>
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