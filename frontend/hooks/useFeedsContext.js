import { FeedsContext} from '../context/FeedContext'
import { useContext } from 'react'

export const useFeedsContext = () => {
    const context = useContext(FeedsContext)

    if(!context){
        throw Error("useFeedsContext must be used inside an FeedsContextProvider")
    }

    return context
}