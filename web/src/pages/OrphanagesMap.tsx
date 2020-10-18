import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 4]
});

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy marker"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

           <Map center={[-30.040694,-51.1283178]}
            zoom={75}
            style={{ width: '100%', height: '100%'}}
            >
                 <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                 <Marker 
                    icon={mapIcon} 
                    position={[-30.040694,-51.1261291]}
                 >
                      
                     <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
                        Nome do local
                         <Link to="">                            
                             <FiArrowRight size={20} color="#ffffff" />
                         </Link>

                     </Popup>

                 </Marker>



           </Map>
            
              
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#ffffff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;