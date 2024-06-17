import Geolocation, {
    GeolocationResponse,
  } from 'react-native-geolocation-service';
  
  export const CurrentPosition = () => {
    const [location, setLocation] =
      useState <
      GeolocationResponse['coords'] >
      {
        latitude: 0,
        longitude: 0,
      };
  
    useEffect(() => {
      Geolocation.getCurrentPosition(
        location => setLocation(location.coords),
        err => alert(err.message),
        {enableHighAccuracy: true, timeout: 10000},
      );
    }, []);
  
    return location;
  };