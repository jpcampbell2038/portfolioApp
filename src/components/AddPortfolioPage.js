import React from 'react';
import { connect } from 'react-redux';
import PortfolioForm from './PortfolioForm';
import { addPortfolio } from '../actions/portfolios';

const AddPortfolioPage = (props) => (
    <div>
        <h1>Add Project</h1>
        <PortfolioForm 
            onSubmit={(portfolio) => {
                props.dispatch(addPortfolio(portfolio));
                props.history.push('/');
            }}
        /> 
    </div>
);

export default connect()(AddPortfolioPage);