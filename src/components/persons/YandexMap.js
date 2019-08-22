import React from 'react';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

export default ({markets}) => {
    return (
    <YMaps style={{ height: '50vh', width: '60vw', margin: '30px auto'  }}
        enterprise
        query={{
          apikey: 'c28eb37a-b0c8-44bd-b589-29629cb89fa2',
        }}
    >
        <div id="map-basics" style={{ height: '100%', width: '100%', margin: '0' }}>
            <Map state={{center:[markets[0].latitude, markets[0].longitude], zoom: '5'}} style={{ height: '50vh', width: '60vw', margin: '30px auto'  }}>
              {markets.map( (item,i) => {
                return(
                  <GeoObject key = {i}
                    geometry={{
                      type: 'Point',
                      coordinates: [item.latitude, item.longitude],
                    }}
                    properties= {{
                      iconContent: item.description,
                    }}
                    options={{
                      preset: 'islands#blackStretchyIcon',
                    }}
                  />
                  )
              })}
            </Map>
        </div>
      </YMaps>
    );
}
