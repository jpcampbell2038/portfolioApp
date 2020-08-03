import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioListItem = ({ id, description, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {note}
        </p>
    </div>
);

export default PortfolioListItem;