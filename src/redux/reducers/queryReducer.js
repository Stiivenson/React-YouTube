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

        case types.query.SET: {
            return {
                ...state,
                queries: payload
            }
        }

        case types.query.ADD:
            return {
                ...state,
                queries: [...state.queries, payload]
            }

            case types.query.EDIT:
                return {
                    ...state,
                    queries: state.queries.map(query => query.id === payload.id ? {
                        ...query,
                        title: payload.title,
                        query: payload.query,
                        sort: payload.sort,
                        maxNumb: payload.maxNumb
                    } : query)
                }

                case types.query.DELETE:
                    return {
                        ...state,
                        queries: state.queries.filter(query => query.id !== payload)

                    }


                    default:
                        return state
    }
}