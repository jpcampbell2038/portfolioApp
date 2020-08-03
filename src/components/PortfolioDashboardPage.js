import React from 'react';
import PortfolioList from './PortfolioList';
import PortfolioListFilters from './PortfolioListFilters';

const PortfolioDashboardPage = () => (
    <div>
        <PortfolioListFilters />
        <PortfolioList />
    </div>
);

export default PortfolioDashboardPage;