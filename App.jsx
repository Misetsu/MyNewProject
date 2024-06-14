
import { Valhalla } from "@routingjs/valhalla"

const v = new Valhalla() // URL defaults to http://valhalla1.openstreetmap.de
v.directions(
   [
       [47.380742, 8.512516], // pass as [lat, lon]
       [47.359467, 8.557835],
   ],
   "auto"
).then((d) => {
   // do stuff with the directions response
   d.directions.forEach((direction) => {
       console.log(direction.feature) // get the route as GeoJSON feature
       console.log(direction.feature.properties.distance) // get the route distance
       console.log(direction.feature.properties.duration) // get the route duration
   })
})