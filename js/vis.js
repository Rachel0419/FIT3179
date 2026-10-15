// Variable pointing to your modular Vega-Lite JSON file for Map 1
var vg_1 = "json/map1.json";

// Embed Map 1 into the HTML div container with id="map_heatmap"
vegaEmbed("#map_heatmap", vg_1).then(function(result) {
    // Access the Vega view instance if needed (https://vega.github.io/vega/docs/api/view/)
}).catch(console.error);