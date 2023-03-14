import {useContext, useEffect, useState} from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import apiKeyContext from "./apiKeyContext";

function Map() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {apiKey} = useContext(apiKeyContext);

    const [location, setLocation] = useState({
        lat: 0,
        lng: 0
    })
    const [locationAvailable, setLocationAvailable] = useState(false);

    useEffect(() => {
        if ('geolocation' in navigator) {
            setLocationAvailable(true);
        }
        // else do nothing, coz initial = false
    }, [])

    useEffect(() => {
        if (locationAvailable) {
            navigator.geolocation.getCurrentPosition(() => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            })
        }
    }, [])

    console.log(location)

    return (
        <>

        </>
    )
}

export default Map;