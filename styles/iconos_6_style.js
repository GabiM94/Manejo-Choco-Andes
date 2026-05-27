var size = 0;
var placement = 'point';
function categories_iconos_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Contención de fragmentación':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [255.20982, 251.13741],
                  scale: 0.058775167820736676,
                  anchor: [127.60491, 125.568705],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/DEFORESTACION.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Expansión':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [300.36176, 72.152443],
                  scale: 0.07657432823672361,
                  anchor: [150.18088, 36.0762215],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/EXPANSION.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Patrullajes':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [31.011223, 59.252216],
                  scale: 0.22572473197848403,
                  anchor: [15.5056115, 29.626108],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PATRULLAJE.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_iconos_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_iconos_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
