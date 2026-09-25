var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IntersectionTiles_1 = new ol.format.GeoJSON();
var features_IntersectionTiles_1 = format_IntersectionTiles_1.readFeatures(json_IntersectionTiles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionTiles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectionTiles_1.addFeatures(features_IntersectionTiles_1);
var lyr_IntersectionTiles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectionTiles_1, 
                style: style_IntersectionTiles_1,
                popuplayertitle: 'Intersection Tiles',
                interactive: true,
                title: '<img src="styles/legend/IntersectionTiles_1.png" /> Intersection Tiles'
            });
var format_TransitStops_2 = new ol.format.GeoJSON();
var features_TransitStops_2 = format_TransitStops_2.readFeatures(json_TransitStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransitStops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransitStops_2.addFeatures(features_TransitStops_2);
var lyr_TransitStops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransitStops_2, 
                style: style_TransitStops_2,
                popuplayertitle: 'Transit Stops',
                interactive: true,
                title: '<img src="styles/legend/TransitStops_2.png" /> Transit Stops'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_IntersectionTiles_1.setVisible(true);lyr_TransitStops_2.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_IntersectionTiles_1,lyr_TransitStops_2];
lyr_IntersectionTiles_1.set('fieldAliases', {'geography_id': 'geography_id', 'native_id': 'native_id', 'source_snapshot_id': 'source_snapshot_id', 'area_m2': 'area_m2', 'seed_node_count': 'seed_node_count', 'seed_degree': 'seed_degree', 'seed_osmids': 'seed_osmids', 'inherited_from_edition': 'inherited_from_edition', });
lyr_TransitStops_2.set('fieldAliases', {'feed_id': 'feed_id', 'stop_id': 'stop_id', 'stop_name': 'stop_name', 'agency_name': 'agency_name', 'nearest_intersection_id': 'nearest_intersection_id', 'intersection_source_snapshot_id': 'intersection_source_snapshot_id', 'nearest_intersection_distance_m': 'nearest_intersection_distance_m', 'seed_degree': 'seed_degree', 'seed_node_count': 'seed_node_count', 'is_near_real_intersection': 'is_near_real_intersection', });
lyr_IntersectionTiles_1.set('fieldImages', {'geography_id': 'TextEdit', 'native_id': 'Hidden', 'source_snapshot_id': 'Hidden', 'area_m2': 'Hidden', 'seed_node_count': 'Hidden', 'seed_degree': 'Hidden', 'seed_osmids': 'Hidden', 'inherited_from_edition': 'Hidden', });
lyr_TransitStops_2.set('fieldImages', {'feed_id': 'Hidden', 'stop_id': 'Hidden', 'stop_name': 'TextEdit', 'agency_name': 'TextEdit', 'nearest_intersection_id': 'TextEdit', 'intersection_source_snapshot_id': 'Hidden', 'nearest_intersection_distance_m': 'Hidden', 'seed_degree': 'Hidden', 'seed_node_count': 'Hidden', 'is_near_real_intersection': 'Hidden', });
lyr_IntersectionTiles_1.set('fieldLabels', {'geography_id': 'inline label - always visible', });
lyr_TransitStops_2.set('fieldLabels', {'stop_name': 'inline label - always visible', 'agency_name': 'inline label - always visible', 'nearest_intersection_id': 'inline label - always visible', });
lyr_TransitStops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});