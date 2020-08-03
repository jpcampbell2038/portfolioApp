import { v4 as uuidv4 } from 'uuid';

//ADD
export const addPortfolio = (
    {
        description = '',
        note = ''
    } = {}
) => ({
    type: 'ADD_PORTFOLIO',
    portfolio: {
        id: uuidv4(),
        description,
        note
    }
});

// REMOVE
export const removePortfolio = ({ id } = {}) => ({
    type: 'REMOVE_PORTFOLIO',
    id
});

// EDIT
export const editPortfolio = (id, updates) => ({
    type: 'EDIT_PORTFOLIO',
    id,
    updates
});