import * as maplibregl from "https://esm.sh/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});