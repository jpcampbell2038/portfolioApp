import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import AddPortfolioPage from '../components/AddPortfolioPage';
import EditPortfolioItemPage from '../components/EditPortfolioPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDashboardPage} exact={true} />
                <Route path="/add" component={AddPortfolioPage} exact={true} />
                <Route path="/edit/:id" component={EditPortfolioItemPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;