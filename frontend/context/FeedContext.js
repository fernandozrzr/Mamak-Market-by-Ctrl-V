import { createContext, useReducer } from 'react';

export const FeedsContext = createContext();

export const feedsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FEEDS':
            return {
                
                feeds: action.payload
            };

        case 'SET_LISTS':
                // Remove duplicate listings based on user property
                console.log("Hello")
            return {
                
                feeds: action.payload
            };
                
        case 'CREATE_FEED':
            return {
                feeds: [action.payload, ...state.feeds]
            };
        case 'PATCH_FEED':
            return {
                feeds: state.feeds.map(feed => {
                    if (feed._id === action.payload._id) {
                        return {
                            ...feed,
                            likes: action.payload.likes, // Updating likes count, for example
                            // Update other properties as needed
                        };
                    }
                    return feed;
                })
            };
        case 'PATCH_LIST':
    return {
        feeds: state.feeds.map(feed => {
            if (feed._id === action.payload._id) {
                return {
                    ...feed,        // Spread the existing properties of the feed
                    ...action.payload, // Override them with the properties from the payload
                };
            }
            return feed;
        })
    };



        case 'DELETE_FEED':
            return {
                feeds: state.feeds.filter((f) => f._id !== action.payload._id),
            };
        default:
            return state;
    }
};

export const FeedsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(feedsReducer, { feeds: [] });

    return (
        <FeedsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FeedsContext.Provider>
    );
};
