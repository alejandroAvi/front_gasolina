import React from 'react';
import { LoadScript, GoogleMap ,Marker } from "@react-google-maps/api";

const Mapas = ({data}) => {

    const center = {
        lat: 20.6588742,
        lng:-103.4435545
    };
     
    return(
        <div className="row">
            <div className="col">
                <div id="google_map">
                    <div className="map_container">
                        <LoadScript id="script-loader" googleMapsApiKey="AIzaSyDpfL6G4DCXjdEf3zkO1arJeZfqx-_ljrI">
                            <GoogleMap
                                zoom={5}
                                center={center}
                                mapContainerStyle={{height: '600px',
                                    width: '100%'}}>

                                {data.map((item,index) => (
                                    <Marker
                                        onLoad={marker => {  
                                        }}
                                        key={index}
                                        position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }}
                                    />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mapas;