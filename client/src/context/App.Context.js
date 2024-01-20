import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('');
    const [countryMapping, setCountryMapping] = useState({});
    const [allItenararies, setAllItenararies] = useState({});
    const [itenarary, setItenarary] = useState({});
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const getCountryMapping = () => {
            axios.get('http://localhost:4000/country', {
                headers: {
                    'Content-Type' : 'application/json',
                }
            }).then((res) => {
                const countryData = res.data.reduce((obj, item) => ({
                    ...obj,
                    [item['_id']] : item.name
                }), {})
                setCountryMapping(countryData);
            }).catch((err) => {
                console.log(err);
            })
        };

        getCountryMapping();
    }, [])

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