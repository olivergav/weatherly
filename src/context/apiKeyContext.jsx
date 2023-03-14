import { createContext } from 'react';

const apiKey = '35c7e90ce95b41d58a1144548231403';

const ApiKeyContext = createContext(apiKey);

export const ApiKeyProvider = ({children}) => {
    return (
        <ApiKeyContext.Provider value={{apiKey}}>
            {children}
        </ApiKeyContext.Provider>
    )
}

export default ApiKeyContext;