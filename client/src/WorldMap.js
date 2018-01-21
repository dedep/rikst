import React, { Component } from 'react';

import AmCharts from '@amcharts/amcharts3-react';
import 'ammap3/ammap/ammap.js';
import 'ammap3/ammap/maps/js/worldLow.js';

class WorldMap extends Component {
  citySVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

  render() {
    return (
      <AmCharts.React
        style={{
          width: "100%",
          height: "500px"
        }}
        options={{
          type: "map",
          mouseWheelZoomEnabled: true,
          zoomDuration: 0.4,
          areasSettings: {
            unlistedAreasColor: "#8dd9ef"
          },
          imagesSettings: {
            color: "#585869",
            rollOverColor: "#585869",
            selectedColor: "#585869",
            pauseDuration: 0.2,
            animationDuration:2.5,
            adjustAnimationSpeed:true
          },
          dataProvider: {
            "map": "worldLow",
            "zoomLevel": 5,
            "zoomLongitude": 21,
            "zoomLatitude": 52,
            "images": [{
              svgPath: this.citySVG,
              title: "Paris",
              latitude: 48.8567,
              longitude: 2.3510
            }, {
              svgPath: this.citySVG,
              title: "Toronto",
              latitude: 43.8163,
              longitude: -79.4287
            }, {
              svgPath: this.citySVG,
              title: "Los Angeles",
              latitude: 34.3,
              longitude: -118.15
            }, {
              svgPath: this.citySVG,
              title: "Havana",
              latitude: 23,
              longitude: -82
            }]
          }
        }} />
    );
  }
}

export default WorldMap;
