import React from 'react'

import {Route, HashRouter, Switch} from 'react-router-dom'

import Home from './pages/Home'
import ListBeneficiarios from './pages/ListBeneficiarios'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const Routes = () => {
    return (
        <HashRouter basename="/react-auxilio-emergencial">
            <Header/>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={ListBeneficiarios} path="/show-cidade/:cidadeId/:periodo" />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    )
}

export default Routes