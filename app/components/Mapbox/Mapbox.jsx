'use client'

import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const styles = {
  height: '375px',
  width: '100%',
}

const popup = `
<div style="color: black;">
  <span>1000, Sofia</span><br />
  <p>Bulgaria</p>
  <p>email: atanas.irikev@gmail.com</p>
</div>
`

const Mapbox = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYXRhbmFzLWlyaWtldiIsImEiOiJjazh5a3A0MjkwMmFuM3RvMjB1OHhsZTR6In0.7PvI1gZCbW67z0fgD3BHPQ'
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        // style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        style: 'mapbox://styles/atanas-irikev/cl4403xq9000214nsenvj1ske', // stylesheet location
        // style: 'mapbox://styles/mapbox/light-v11', // stylesheet location
        center: [23.312892, 42.699385],
        zoom: 7,
      })

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl())

      // Create a new marker.
      const marker = new mapboxgl.Marker()
        .setLngLat([23.322902, 42.697462])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(popup)
        )
        .addTo(map)

      map.on('load', () => {
        setMap(map)
        map.resize()

        // new mapboxgl.Popup()
        //   .setLngLat([23.322902, 42.697462])
        //   // .setPopup(
        //   //   new mapboxgl.Popup({ offset: 25 }) // add popups
        //   //     .setHTML(popup)
        //   // )
        //   .setHTML(popup)
        //   .addTo(map)
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map])

  return <div ref={el => (mapContainer.current = el)} style={styles} />
}

export default Mapbox
