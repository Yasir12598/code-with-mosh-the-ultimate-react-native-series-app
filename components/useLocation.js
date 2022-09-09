import { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

export default function useLocation(){
    const [location, setLocation] = useState({});

    const getLocation = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        }
        else {
        }
    }

    useEffect(() => {
        getLocation();
    }, [])
    // if(location===undefined) useLocation();
    // else
     return location;
};