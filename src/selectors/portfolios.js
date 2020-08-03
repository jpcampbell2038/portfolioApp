
//GET VISIBLE PORTFOLIOS
export default (portfolios, { text }) => {
    return portfolios.filter((portfolio) => {
        const textMatch = portfolio.description.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};