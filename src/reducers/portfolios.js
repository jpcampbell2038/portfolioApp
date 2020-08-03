
// PORTFOLIO REDUCER
const portfolioReducerDefaultState = [];
export default (state = portfolioReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_PORTFOLIO':
            return [
                ...state,
                action.portfolio
            ];
        case 'REMOVE_PORTFOLIO' :
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_PORTFOLIO' :
            return state.map((portfolio) => {
                if (portfolio.id === action.id) {
                    return{
                        ...portfolio,
                        ...action.updates
                    };
                }
                else {
                    return portfolio;
                };
            });
        default: return state;
    }
};

