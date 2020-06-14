import React from 'react'

import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './pages/Home'
import ListBeneficiarios from './pages/ListBeneficiarios'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const Routes = () => {
    return (
        <BrowserRouter basename="/react_auxilio_emergencial">
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