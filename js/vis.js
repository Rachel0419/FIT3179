// Map 1: Tokyo Geographic Density Heatmap (Advanced Map Idiom)
const mapHeatmapSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 320,
  "data": {"url": "data/tokyo_clean.csv"},
  "mark": {"type": "circle", "opacity": 0.4, "size": 10},
  "encoding": {
    "longitude": {"field": "longitude", "type": "quantitative", "title": "Longitude"},
    "latitude": {"field": "latitude", "type": "quantitative", "title": "Latitude"},
    "color": {"value": "#d95f02"},
    "tooltip": [
      {"field": "user_id", "type": "nominal", "title": "User ID"},
      {"field": "date_taken", "type": "nominal", "title": "Time Taken"}
    ]
  }
};
vegaEmbed('#map_heatmap', mapHeatmapSpec);

// Map 2: Tokyo Proportional Bubble Map (Advanced Map Idiom)
const mapBubbleSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 320,
  "data": {"url": "data/tokyo_clean.csv"},
  "mark": {"type": "point", "filled": true, "opacity": 0.6},
  "encoding": {
    "longitude": {"field": "longitude", "type": "quantitative"},
    "latitude": {"field": "latitude", "type": "quantitative"},
    "size": {"field": "x", "type": "quantitative", "title": "Spatial X Coord", "legend": null},
    "color": {"field": "y", "type": "quantitative", "title": "Spatial Y Coord", "scale": {"scheme": "viridis"}}
  }
};
vegaEmbed('#map_bubble', mapBubbleSpec);

// Chart 4: Resolution vs. Price Bubble Scatter Plot (Advanced Chart)
const scatterSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 320,
  "data": {"url": "data/camera_dataset.csv"},
  "mark": "circle",
  "encoding": {
    "x": {"field": "Release date", "type": "quantitative", "title": "Release Year", "scale": {"zero": false}},
    "y": {"field": "Price", "type": "quantitative", "title": "Price ($)", "scale": {"type": "log"}},
    "size": {"field": "Effective pixels", "type": "quantitative", "title": "Effective Pixels"},
    "color": {"field": "Zoom wide (W)", "type": "quantitative", "title": "Zoom Wide (mm)", "scale": {"scheme": "blues"}},
    "tooltip": [
      {"field": "Model", "type": "nominal"},
      {"field": "Release date", "type": "quantitative"},
      {"field": "Price", "type": "quantitative"},
      {"field": "Effective pixels", "type": "quantitative"}
    ]
  }
};
vegaEmbed('#chart_scatter', scatterSpec);

// Chart 6: Brand Price Jitter Plot (Advanced Chart)
const jitterSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 320,
  "data": {"url": "data/camera_dataset.csv"},
  "transform": [
    {"calculate": "split(datum.Model, ' ')[0]", "as": "Brand"}
  ],
  "mark": {"type": "point", "filled": true, "opacity": 0.7},
  "encoding": {
    "x": {"field": "Brand", "type": "nominal", "title": "Camera Brand", "axis": {"labelAngle": -45}},
    "y": {"field": "Price", "type": "quantitative", "title": "Price ($)", "scale": {"type": "log"}},
    "color": {"field": "Brand", "type": "nominal", "legend": null},
    "tooltip": [
      {"field": "Model", "type": "nominal"},
      {"field": "Price", "type": "quantitative"}
    ]
  }
};
vegaEmbed('#chart_jitter', jitterSpec);