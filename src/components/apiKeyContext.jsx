import { createContext } from 'react';

const apiKey = 'AIzaSyBHXiy7UjaDLQ0sbwIevNGcu0IO4yyaEcE';

const ApiKeyContext = createContext(apiKey);

export const ApiKeyProvider = ({children}) => {
    return (
        <ApiKeyContext.Provider value={{apiKey}}>
            {children}
        </ApiKeyContext.Provider>
    )
}

export default ApiKeyContext;