var size = 0;
var ranges_IMD215ofLSOAsinEngland = [[1.000000, 2.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})
    })]],
[2.000000, 2.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(10,83,158,1.0)"})
    })]],
[2.000000, 3.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(33,113,181,1.0)"})
    })]],
[3.000000, 4.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(61,141,195,1.0)"})
    })]],
[4.000000, 4.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(95,166,209,1.0)"})
    })]],
[4.000000, 5.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(136,190,220,1.0)"})
    })]],
[5.000000, 6.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(175,209,231,1.0)"})
    })]],
[6.000000, 7.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(204,223,241,1.0)"})
    })]],
[7.000000, 9.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(225,237,248,1.0)"})
    })]],
[9.000000, 10.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}) , fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})
    })]]];
var styleCache_IMD215ofLSOAsinEngland={}
var style_IMD215ofLSOAsinEngland = function(feature, resolution){
    var value = feature.get("IMD_2015_IMD Decile (where 1 is most deprived 10% of LSOAs)");
    var style = ranges_IMD215ofLSOAsinEngland[0][2];
    for (i = 0; i < ranges_IMD215ofLSOAsinEngland.length; i++){
        var range = ranges_IMD215ofLSOAsinEngland[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_IMD215ofLSOAsinEngland[key]){
        var text = new ol.style.Text({
              font: '16.9px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_IMD215ofLSOAsinEngland[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_IMD215ofLSOAsinEngland[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};