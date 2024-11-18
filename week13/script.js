mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb2xhY2hhbjEyMzEiLCJhIjoiY20xdGkxdWc0MDJwbjJrb2RibmI2b2U2YSJ9.dg3FKwp0ObQsl_ELBl1u7w';

const map = new mapboxgl.Map({
  container: 'hanyu', // container id
  style: 'mapbox://styles/karolachan1231/cm3hkska3005m01r22o9d2wo7', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
	// MORE CODE WILL GO INSIDE HERE\
	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://karolachan1231.73wf92tb'
      });

map.addLayer({
        'id':'restaurantLayer',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'_Historical__Restaurant_Inspe-8qfqy2',
        'paint':{
			'circle-color': '#66ccff'}
  })

	map.on('mouseenter', 'restaurantLayer', (e) => {
        // console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;

    })


})