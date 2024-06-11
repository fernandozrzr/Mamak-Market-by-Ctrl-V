import { createContext, useReducer} from 'react'

export const FeedsContext = createContext()


export const feedsReducer = (state, action) => {
    switch(action.type){
        case 'SET_FEEDS':
            return {
                feeds: action.payload
            }
        case 'CREATE_FEED':
            return{
                feeds: [action.payload, ...state.feeds]
            }
        case 'PATCH_FEED':
            return{
                feeds: state.feeds.map(feed => {
                    // If the feed item's _id matches the _id of the payload
                    if (feed._id === action.payload._id) {
                        // Update the feed item with the payload data
                        return {
                            ...feed,
                            // Update properties as needed
                            likes: action.payload.likes, // For example, updating likes count
                            // You can update other properties here
                        };
                    }
                    // If the feed item's _id doesn't match, return it unchanged
                    return feed;
                })
            }
        default:
            return state
    }
}

export const FeedsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(feedsReducer, {feeds:null})

    return (
        <FeedsContext.Provider value={{...state, dispatch}}>
            {children}
        </FeedsContext.Provider>

    )


}