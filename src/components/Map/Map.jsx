import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import mapStyle from './MapStyle'

function Map() {
    const center = useMemo(() => ({lat: 42.35871442373906, lng: -71.05479067301867}), []);

    const { isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCFJOpYc9JH_etli83gpJu2OwH-AWWMPr0"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
    <GoogleMap 
        options={{styles: mapStyle}}
        zoom={12} 
        center={{lat: 42.35871442373906, lng: -71.05479067301867}} 
        mapContainerClassName="map-container">
            <MarkerF
                position={center}
                icon={{url: 'img/location.png'}}
            />
    </GoogleMap>
    )
}

export default Map;