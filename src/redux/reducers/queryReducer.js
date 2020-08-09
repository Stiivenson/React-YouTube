import * as types from '../../constants/types';
import {
    queries
} from '@testing-library/react';

const initialState = {
    queries: []
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case types.query.ADD:
            return {
                ...state,
                queries: [...state.queries, payload]
            }

            default:
                return state
    }
}