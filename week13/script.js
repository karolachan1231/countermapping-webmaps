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
      'circle-opacity': 0.3,
      'circle-color':
        ['step',
          ['to-number', ['get', 'inspection_score']],
          '#aaaaaa',  
          45, '#440154',  // (45 - 80)
          80, '#3b528b',  // (80 - 85)
          85, '#21908d',  // (85 - 90)
          90, '#5dc963',  // (90 - 95)
          95, '#fde725'   // (95 - 100)
          ]
        }
  })

	map.on('mouseenter', 'restaurantLayer', (e) => {
        // console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;

    });

console.log('My name is YOUR-NAME');
map.on('mouseenter', 'restaurantLayer', (e) => {
        console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name']
        var textField = document.getElementById('restText');
        textField.innerHTML = name

})

})