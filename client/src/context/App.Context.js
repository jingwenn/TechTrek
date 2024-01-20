import { createContext, useEffect, useState } from 'react';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('');
    const [countryMapping, setCountryMapping] = useState({});
    const [allItenararies, setAllItenararies] = useState({});
    const [itenarary, setItenarary] = useState({});
    const [userInfo, setUserInfo] = useState({});

    return (
        <AppContext.Provider
            value={{
                authToken,
                setAuthToken,
                countryMapping,
                setCountryMapping,
                allItenararies,
                setAllItenararies,
                itenarary, 
                setItenarary
            }}
        >
            {children}
        </AppContext.Provider>
    )

}