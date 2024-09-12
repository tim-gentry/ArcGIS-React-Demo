import { ArcgisMap } from '@arcgis/map-components-react'
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import baseFloodElevation from './assets/baseFloodElevation';
import './App.css'

const simpleLineSymbol = new SimpleLineSymbol({
  color: "green"
})

const simpleRenderer = new SimpleRenderer({
  symbol: simpleLineSymbol
})

const template = new PopupTemplate({
  title: "BFE Profile Lines",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "DFIRM_ID",
          label: "DFIRM ID"
        },
        {
          fieldName: "BFE_LN_ID",
          label: "BFE Line ID"
        },
        {
          fieldName: "ELEV",
          label: "Elevation (ft)",
          format: {
            digitSeparator: true,
            places: 0
          }
        },
        {
          fieldName: "V_DATUM",
          label: "Vertical Datum"
        }
      ]
    }
  ]
});

function App() {
  const blob = new Blob([JSON.stringify(baseFloodElevation)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);

  return (
    <>
      <h1>ArcGIS Demo React App</h1>
      <div className='map'>
        <ArcgisMap
          basemap={'topo'}
          center={[-84.2802, 30.4417]}
          zoom={11}
          onArcgisViewChange={(event) => {
            const map: __esri.Map = event.target.map
            const layer = new GeoJSONLayer({
              url,
              popupTemplate: template,
              renderer: simpleRenderer
            }
            );
            map.add(layer)
          }}></ArcgisMap>
      </div>
    </>
  )
}

export default App
