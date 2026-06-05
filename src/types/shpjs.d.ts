declare module 'shpjs' {
  import type { Feature, FeatureCollection } from 'geojson'

  function shp(buffer: ArrayBuffer): Promise<FeatureCollection | Feature | Feature[]>

  export default shp
}
