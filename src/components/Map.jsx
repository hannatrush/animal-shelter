import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
    const center = useMemo(() => ({lat: 42.35871442373906, lng: -71.05479067301867}), []);

    const { isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCFJOpYc9JH_etli83gpJu2OwH-AWWMPr0"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
    <GoogleMap 
        zoom={12} 
        center={{lat: 42.35871442373906, lng: -71.05479067301867}} 
        mapContainerClassName="map-container">
            <Marker
                id="map"
                key={center}
                position={center}/>
    </GoogleMap>
    )
}

export default Map;