import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('');
    const [countryMapping, setCountryMapping] = useState({});
    const [destinationMapping, setDestinationMapping] = useState({});
    const [allItineraries, setAllItineraries] = useState([]);
    const [itinerary, setItinerary] = useState({});
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

        const getDestinations = () => {
            axios.get('http://localhost:4000/destination', {
                headers: {
                    'Content-Type' : 'application/json',
                }
            }).then((res) => {
                const destinationData = res.data.reduce((obj, item) => ({
                    ...obj,
                    [item['_id']] : item.name
                }), {})
                setDestinationMapping(destinationData);
            }).catch((err) => {
                console.log(err);
            })
        }

        getCountryMapping();
        getDestinations();
    }, [])

    return (
        <AppContext.Provider
            value={{
                authToken,
                setAuthToken,
                countryMapping,
                setCountryMapping,
<<<<<<< HEAD
                allItineraries,
                setAllItineraries,
                itinerary, 
                setItinerary
=======
                allItenararies,
                setAllItenararies,
                itenarary, 
                setItenarary,
                destinationMapping,
                setDestinationMapping,
>>>>>>> 9a5c880a36b2ac238d0366cdeb11cc57395735c8
            }}
        >
            {children}
        </AppContext.Provider>
    )

}