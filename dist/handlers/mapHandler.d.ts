import { MapLayers, MapConfigConfig } from '../types';
import L from 'leaflet';
export default class MapHandler {
    private readonly _map;
    private readonly _mapOptions;
    private _mapLayers;
    private _layerControl;
    constructor(mapOptions: MapConfigConfig | undefined);
    get map(): L.Map;
    get layerControl(): L.Control.Layers;
    private addControls;
    private addBaseLayer;
    private disableLayerControlHover;
    private watchLayerStatus;
    init(mapLayers: MapLayers, eventEmitterCallback: Function): void;
}
