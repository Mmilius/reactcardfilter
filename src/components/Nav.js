import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import CardContainer from './CardContainer'
import SearchForm from './SearchForm'
import AppNotFound from './AppNotFound'

const Nav = () => {
    return (
        <Router>
            <div className="nav">
                <Link className="link" to="/">Cards</Link>
                <link className="link" to="/search">Search</link>
            </div>
            <Switch>
            <Route exact path='/' component={CardContainer}/>
            <Route path="/search" component={SearchForm}/>
            <Route component={AppNotFound}/>
            </Switch>
        </Router>




    )
}

export default Nav