import { Map, FeatureGroup } from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { DrawingConfig, ToolbarOptions } from '../types';
export default class DrawingControlHandler {
    private readonly _map;
    private readonly _drawItemsGroup;
    private readonly _options;
    constructor(map: Map, drawItemsGroup: FeatureGroup, controlOptions?: DrawingConfig);
    get drawItemsGroup(): FeatureGroup;
    get map(): Map;
    get options(): ToolbarOptions;
    private calculateAreas;
    private incrementLayerInfos;
    handleDrawingEvents(eventEmitterCallback: Function): void;
    private handleUpdateDrawingEvents;
    private handleDeleteDrawingEvents;
    private addTranslation;
    private formatMenuOptions;
    private applyShapeStyles;
    private setMartkerIcon;
}
