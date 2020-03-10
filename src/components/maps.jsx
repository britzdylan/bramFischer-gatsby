import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from "react-icons/fa";


const defaultProps = {
  center: {
    lat: -26.110859,
    lng: 28.001034,
  },
  zoom: 15,
}

const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt className='faMap' /><a href="https://www.google.co.za/maps/place/Bram+Fischer+Shopping+Centre/@-26.1110852,27.9982013,17z/data=!3m1!4b1!4m5!3m4!1s0x1e95754c62f41317:0x19f3e39ae4a9722!8m2!3d-26.11109!4d28.00039" target="_blank" className="mapLink">{text}</a></div>

const GoogleMap = () => (
  <div style={{ height: '300px', width: '100%' }}>
    <GoogleMapReact
    //   bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyA0w4o9eZHUKUv19Th_RKbFbiOmTusL9RA' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
    >
      <AnyReactComponent
        lat={-26.110859}
        lng={28.001034}
        text={'bramFischer Centre'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
