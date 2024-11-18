var config = {
    style: 'mapbox://styles/karolachan1231/cm2xi6pqo000801pf4sencp2m',
    accessToken: 'pk.eyJ1Ijoia2Fyb2xhY2hhbjEyMzEiLCJhIjoiY20xdGkxdWc0MDJwbjJrb2RibmI2b2U2YSJ9.dg3FKwp0ObQsl_ELBl1u7w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Flooding in NYC',
    subtitle: '2050 and 2100 predicted floodplains',
    byline: 'By Hanyu Zeng',
    para1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tincidunt nisi, a eleifend lectus semper imperdiet. In placerat diam dictum velit lacinia, sed ultricies lacus interdum. Nulla ac tincidunt mauris. In at nibh non dolor lacinia ornare. Mauris ultricies vel neque eu suscipit. Aenean at libero a velit dignissim tempus at sodales mi. Nullam sed pellentesque lorem. Sed ornare, dolor non fringilla ullamcorper, ante massa efficitur ante, eu efficitur orci velit sed nulla. Nulla non nibh eu arcu sodales lobortis. Duis consectetur ligula dolor, at dictum turpis iaculis a. Curabitur dapibus eu dui id efficitur. Sed posuere eget leo a varius.",
    para2:"Curabitur bibendum placerat nisl, ac aliquam nisl mollis id. Sed dapibus fringilla arcu. Nullam quis arcu dictum sem commodo finibus. Donec sollicitudin efficitur lorem congue fringilla. Vestibulum egestas elit in ipsum suscipit, a congue velit mattis. Curabitur efficitur, tellus ac posuere egestas, justo ligula pellentesque nibh, eu pharetra lectus sapien ac est. Fusce aliquet vehicula ligula eget congue. Ut finibus purus mauris, non facilisis enim vehicula sit amet.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Severe Flooding in NYC',
            image: 'https://d.newsweek.com/en/full/1885388/storm-ida-new-york.jpg',
            description: 'In the nighttime, the floodwaters in Manhattan have almost spread up the steps.',
            location: {
                center: [-73.96782, 40.77762],
                zoom: 11.48,
                pitch: 0.00,
                bearing: 8.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
              id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video:'images/902-1_902-2364-PD2_preview.mp4',
            location: {
            center: [-73.97615, 40.71901],
            zoom: 14.84,
            pitch: 48,
            bearing: 142.44,
    },
},
{
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flooding in NYC',
            image: 'https://media.nbcnewyork.com/2019/09/central-park-west-water-main-break.jpg?resize=1200%2C675',
            description: 'A water main break near Central Park has flooded the street and knocked out power and water to at least two buildings. The main broke near the intersection of Central Park West and 95th Street Wednesday evening, according to the Department of Environmental Protection. Police and fire trucks blocked off the flooded intersection as crews responded to repair the main. Work crews were expected to work through the night. The break is affecting some buildings, which currently do not have water or power. Neighbors appeared to be handling the outages in good spirits.People are walking the hallways, checking on each other, said Christina Richman, whose parents live in one of the affected buildings. Everyone is helping each other out. Subways were bypassing area stations earlier as a result of the water main break, but have since resumed service with some delays. ',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-74.01039, 40.68003],
                zoom: 17.21,
                pitch: 45.00,
                bearing: -40.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },]

}