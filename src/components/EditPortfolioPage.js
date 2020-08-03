import React from 'react';
import { connect } from 'react-redux';
import PortfolioForm from './PortfolioForm';
import { editPortfolio, removePortfolio } from '../actions/portfolios';


const EditPortfolioPage = (props) => {
    return (
        <div>
            <PortfolioForm
                portfolio={props.portfolio}
                onSubmit={(portfolio) => {
                    props.dispatch(editPortfolio(props.portfolio.id, portfolio));
                    props.history.push('/');
                }}
            />
            <button
                onClick={() => {
                    props.dispatch(removePortfolio({ id: props.portfolio.id }));
                    props.history.push('/');
                }}
            >
            Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        portfolio: state.portfolios.find((portfolio) => portfolio.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditPortfolioPage);