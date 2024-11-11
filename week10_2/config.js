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
                center: [-73.96061, 40.79231],
                zoom: 12.03,
                pitch: 45.00,
                bearing: -40.00
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'https://media.nbcnewyork.com/2019/09/central-park-west-water-main-break.jpg?resize=1200%2C675',
            description: 'A water main break near Central Park has flooded the street and knocked out power and water to at least two buildings. The main broke near the intersection of Central Park West and 95th Street Wednesday evening, according to the Department of Environmental Protection. Police and fire trucks blocked off the flooded intersection as crews responded to repair the main. Work crews were expected to work through the night. The break is affecting some buildings, which currently do not have water or power. Neighbors appeared to be handling the outages in good spirits.People are walking the hallways, checking on each other, said Christina Richman, whose parents live in one of the affected buildings. Everyone is helping each other out. Subways were bypassing area stations earlier as a result of the water main break, but have since resumed service with some delays. ',
            location: {
                center: [-73.94852, 40.79769],
                zoom: 16.04,
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
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Flooding near a waterfront park',
            image: 'https://www.telegraph.co.uk/multimedia/archive/01607/manhole-new-york_1607461i.jpg',
            description: 'The waterfront park has been heavily impacted by recent flooding, with ponds overflowing and spreading water across walking paths and picnic areas. The floodwaters have transformed sections of the park into marshy, waterlogged areas, making it difficult for visitors to access parts of the park. Local authorities are monitoring water levels closely as they work to manage the flood impact on the park’s natural areas and facilities',
            location: {
                center: [-73.93779, 40.79207],
                zoom: 16.53,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'NYC Flooding program',
            image: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A3042-Flood-Architecture_-The-Way-Ahead-IMAGE-6.jpg',
            description: 'Architecture has been used to restrict the heavy water flow from reaching habitable areas by creating soft and hard spaces as front-line warriors. The innovative firm BIG proposed the project BIG U in New York where a 16 km long system employing multiple water retention technology is being developed along the Manhattan River. The system further branches into neighborhood-level interventions, creating a wholesome protective blanket for the city.',
            location: {
                center: [-73.93779, 40.79207],
                zoom: 16.53,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
