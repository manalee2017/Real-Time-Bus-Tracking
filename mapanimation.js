mapboxgl.accessToken = "pk.eyJ1IjoibWFuYWxlZSIsImEiOiJjbDNhNXRkcG0wMmY5M2NtZnpicDU0c3p1In0.TgptLxyMVEMLi1pUJkTKyg";
    
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.08675, 42.35257],
    zoom: 13,
});

var marker = new mapboxgl.Marker()
    .setLngLat([0, 0])
    .addTo(map);

 
async function run(){
    // get bus data    
	const locations = await getBusLocations();
  marker.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude]);

	// timer
	setTimeout(run, 10000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}
