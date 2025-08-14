import { MapLayers } from '../types';
import L, { MapOptions } from 'leaflet';
export default class MapHandler {
    private _map;
    private _mapOptions;
    private _mapLayers;
    private _layerControl;
    constructor(mapOptions: MapOptions | undefined);
    get map(): L.Map;
    get layerControl(): L.Control.Layers;
    private addControls;
    private addBaseLayer;
    private disableLayerControlHover;
    private watchLayerStatus;
    init(mapLayers: MapLayers, mapOptions: MapOptions & {
        removeControlLayers?: any;
    }, eventEmitterCallback: Function): void;
}
