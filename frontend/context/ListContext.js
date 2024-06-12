import { createContext, useReducer } from 'react';

export const ListsContext = createContext();

export const listsReducer = (state, action) => {
    switch (action.type) {

        case 'SET_LISTS':
                // Remove duplicate listings based on user property
                console.log("Hello")
            return {
                
                lists: action.payload
            };
                
        case 'CREATE_LIST':
            return {
                lists: [action.payload, ...state.lists]
            };
        
        case 'PATCH_LIST':
    return {
        lists: state.lists.map(list => {
            if (list._id === action.payload._id) {
                return {
                    ...list,        // Spread the existing properties of the feed
                    ...action.payload, // Override them with the properties from the payload
                };
            }
            return list;
        })
    };



        case 'DELETE_LIST':
            return {
                lists: state.lists.filter((l) => l._id !== action.payload._id),
            };
        default:
            return state;
    }
};

export const ListsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listsReducer, { lists: [] });

    return (
        <ListsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ListsContext.Provider>
    );
};
