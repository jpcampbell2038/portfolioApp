import React from 'react';
import { connect } from 'react-redux';
import PortfolioListItem from './PortfolioListItem';
import selectPortfolios from '../selectors/portfolios';

const PortfolioList = (props) => (
    <div>
        <h1>Portfolio List</h1>
        {props.portfolios.map((portfolio) => {
            return <PortfolioListItem key={portfolio.id} {...portfolio}/>;
        })}
    </div>
);

const mapStatetoProps = (state) => {
    return {
        portfolios: selectPortfolios(state.portfolios, state.filters)
    };
};

export default connect(mapStatetoProps)(PortfolioList);