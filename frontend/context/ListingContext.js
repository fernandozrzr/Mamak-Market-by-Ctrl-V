import React, { createContext, useReducer } from "react";

export const ListingContext = createContext();

// Initial state with an empty array
const initialState = {
    listings: [],
    error: null
};

export const listingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LISTINGS':
            return { ...state, listings: action.payload, error: null };
        case 'CREATE_LISTING':
            return {
                ...state,
                listings: [action.payload, ...state.listings],
                error: null
            };
        case 'DELETE_LISTING':
            return {
                ...state,
                listings: state.listings.filter(listing => listing._id !== action.payload),
                error: null
            };
        case 'LISTINGS_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export const ListingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listingsReducer, initialState);

    return (
        <ListingContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ListingContext.Provider>
    );
};
