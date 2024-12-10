var config = {
    style: 'mapbox://styles/karolachan1231/cm3x8y1h100b601qqcwxedfbf',
    accessToken: 'pk.eyJ1Ijoia2Fyb2xhY2hhbjEyMzEiLCJhIjoiY20xdGkxdWc0MDJwbjJrb2RibmI2b2U2YSJ9.dg3FKwp0ObQsl_ELBl1u7w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Repurposing Vacant Lots in Cleveland',
    subtitle: 'Case study in Buckeye-Woodhill Neighborhood',
    byline: 'By Hanyu Zeng',
    para1:"In Cleveland, some communities have recently faced major drops in population, economic growth, and quality of life. These neighborhoods are examples of urban decline or shrinkage. This decline, coupled with housing foreclosures, abandonment, and demolition, has led to an abundance of urban vacant land. However, these vacant parcels may be repurposed for development and greenspace uses, such as tree planting, urban agriculture, or commercial and residential development.",
    para2:"This website will introduce you to the background of vacant land in Cleveland and walk you through the processes by which the Cleveland Planning Commission prioritizes vacant land uses through the City's two key planning initiatives: Transit-Oriented Development(TOD) and the 15-Minute City. In the initial planning phase, experts produce data-driven land use recommendations using GIS through the City initiatives, the council, internal departments within the City, and community development corporations (CDCs). In the meantime, residents receive training on basic planning concepts and technology used for groundtruthing before going for the field test where they groundtruth the recommendations. Then, stakeholders debrief the recommendations proposed by residents and reconcile any disagreements. Finally, the City produces a report of final land uses for investors, enabling them to locate projects that align with the City's final recommendations.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Vacant Parcels in Cleveland retrieved from 2023 Cleveland Property Inventory',
            image: 'https://wrlandconservancy.org/wp-content/uploads/2023/06/PXL_20230202_201610765.jpg',
            description: 'Cleveland, Ohio, located on the southern shore of Lake Erie, is a dynamic city with a rich industrial history, vibrant cultural scene, and a strong emphasis on revitalization and community development. As of 2023, Cleveland has over 30,000 vacant lots and over 15,000 of them are owned by the City of Cleveland Land Bank. The map below shows all the vacant lots in Cleveland Land Bank, with a large majority concentrated in eastern Cleveland.',
            location: {
                center: [-81.68047, 41.50838],
                zoom: 11.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gcrta-transit-217642615714465-bvu921',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pilot-jason-5i95iq',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '15-minute-city-index-7325649-56mwn0',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'transit-oriented-development-9hgtr4',
                    opacity: 0,
                    duration: 0

                 },
                {
                    layer: 'city-boundary-201008994029866-bw2x0v',
                    opacity: 0.48,
                    duration: 0
                },
                {
                    layer: 'city-landbank-255261706818305-4pb3ld',
                    opacity: 1,
                    duration: 0
                },

            ],
            onChapterExit: [
                {
                    layer: 'gcrta-transit-217642615714465-bvu921',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pilot-jason-5i95iq',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '15-minute-city-index-7325649-56mwn0',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'transit-oriented-development-9hgtr4',
                    opacity: 0,
                    duration: 0

                 },
                {
                    layer: 'city-boundary-201008994029866-bw2x0v',
                    opacity: 0.48,
                    duration: 0
                },
                {
                    layer: 'city-landbank-255261706818305-4pb3ld',
                    opacity: 1,
                    duration: 0
                },
            ]
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'From this zoomed in map, we can see that the vacancy rate (shown in red) in East Cleveland is very high, which is exactly where our research area, Buckeye-Woodhill, is located. This case study area is marked in light yellow. This video then highlights the current opportunities for vacant land development, as the city is working to streamline the process of repurposing its unused land.',
            video:'images/LongVideo.mp4',
            location: {
            center: [-81.61322, 41.48653],
            zoom: 12.13,
            pitch: 0.00,
            bearing: 0.00,
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gcrta-transit-217642615714465-bvu921',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: '15-minute-city-index-7325649-56mwn0',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pilot-jason-5i95iq',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'transit-oriented-development-9hgtr4',
                    opacity: 0,
                    duration: 0
                 }
            ],
            onChapterExit: [
                {
                    layer: 'gcrta-transit-217642615714465-bvu921',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'transit-oriented-development-9hgtr4',
                    opacity: 0,
                    duration: 0
                },
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0
                }
            ],
    },
},
{
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'Buckeye-Woodhill Site',
            image: 'https://th.bing.com/th/id/OIP.t5TzDAuIiKg1YVObCqOUGwHaFj?rs=1&pid=ImgDetMain',
            description: 'In this map, we can clearly see that the majority of vacant parcels are concentrated in the east side. The area in light yellow is the designated Buckeye-Woodhill neighborhood proposed by local community development corporations and adopted by the Cleveland Planning Commission. Its robust resident networks and active CDCs provide a good foundation for groundtruthing.',
            video: 'Video1.mp4',
            location: {
                center: [-81.60208, 41.49008],
                zoom: 14.73,
                pitch: 0.00,
                bearing: 0.00,
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
            onChapterEnter: [
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 1,
                duration: 0//5000
                },
                
            ],
            onChapterExit: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 1,
                duration: 0//5000
                },


            ]
        },
        
        {
            id: 'Chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Transit-Oriented Development Zone',
            image: 'https://image.slideserve.com/14307/slide7-l.jpg',
            description: 'Transit service supports land uses, and a diverse mix of land uses supports transit. Its a virtuous circle. Colored blocks are at or above the threshold to be transit supportive. The map also shows high frequency transit stops in red, and a 1/4 mile (10 minute) walkshed within Cleveland is outlined in purple.',
            location: {
                center: [-81.68047, 41.50838],
                zoom: 11.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0.75,
                duration: 5
                },
                {
                layer: 'gcrta-transit-217642615714465-bvu921',
                opacity: 1,
                duration: 5
                },
                {
                layer: 'buckeyewoodhil-boundary-0511w4',
                opacity: 0,
                duration: 5
                },
                {
                layer: 'city-boundary-201008994029866-bw2x0v',
                opacity: 0,
                duration: 5
                },
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0,
                duration: 5
                }
            ],
            onChapterExit: [
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0,
                duration: 5
                },
                {
                layer: 'gcrta-transit-217642615714465-bvu921',
                opacity: 0,
                duration: 5
                },
                {
                layer: 'buckeyewoodhil-boundary-0511w4',
                opacity: 0.7,
                duration: 5
                },
                {
                layer: 'city-boundary-201008994029866-bw2x0v',
                opacity: 0.75,
                duration: 5
                },
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 1,
                duration: 5
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                }
            ]
        },

                {
            id: 'interlude',
            alignment: 'left',
            hidden: false,
            title: '15-Minute City Index',
            video:'images/15-Minute-City-Index-Cut.mp4',
            description: 'This data-driven GIS model maps the current conditions and access to a general basket of needs and desires that support a high quality of life. This index (ranked out of 36) results from a weighted sum analysis of walkable areas surrounding points of interest. The various locations are aggregated based on their assigned weights to generate a comprehensive index score. The yellow areas indicate higher indexes, while blue areas indicate lower indexes.',
            location: {
                center: [-81.61506, 41.49063],
                zoom: 14.32,
                pitch: 3.92,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 1,
                duration: 0//5000
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'city-boundary-201008994029866-bw2x0v',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 0,
                duration: 0//5000
                }
            ],
            onChapterExit: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 1,
                duration: 0//5000
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0,
                duration: 0//5000
                },
            ]
        },

{
            id: 'Chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Data-driven Mapping',
            image: 'https://execed.saintjoe.edu/uploads/1/4/2/0/142015658/published/design-team-2-900-600_1.jpg?1653680598',
            description: 'The first step is to prioritize land use based on the TOD layer and the 15-minute city index layer. After that, we incorporte land use insights from the City, the council, internal City departments, and community development corporations (CDCs).Then, we compose the final data-driven land use mapping.',
            location: {
                center: [-81.61506, 41.49063],
                zoom: 14.32,
                pitch: 3.92,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 1,
                duration: 0//5000
                },
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0.5,
                duration: 0//5000
                },
                {
                layer: 'gcrta-transit-217642615714465-bvu921',
                opacity: 0,
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0.7,
                },

            ],
            onChapterExit: [
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 1,
                duration: 0//5000
                },
            ]
        },

        {
            id: 'Chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Finalizing data-driven Mapping',
            image: 'https://media.fitzwilliamhoteldublin.com/staging/wp-content/uploads/2016/06/18143051/meeting_planning_in_dublin.png',
            image1:'images/Land Use_Legend.png',
            description: 'Based on the above guidelines, the model utilizes Transit-Oriented Development Zone, 15-minute city index, and professional insights to prioritize land uses through GIS in the following order: high-density and mixed-use areas, multifamily housing, commercial spaces, 2-3 family units, and single-family housing. ',
            location: {
                center: [-81.61506, 41.49063],
                zoom: 14.32,
                pitch: 3.92,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 1,
                duration: 0//5000
                },
                {
                layer: 'city-boundary-201008994029866-bw2x0v',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                }
            ],
            onChapterExit: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0,
                duration: 0//5000
                 }
            ]
        },


        {
            id: 'closing',
            alignment: 'center',
            hidden: false,
            description: 'Residents are supposed to receive training on basic planning concepts and technology used for groundtruthing vacant parcels. Then they survey each parcel in person to see whether their firsthand experience matches the preliminary land use recommendations.',
            video:'images/Recording 2024-12-05 23142320241205-234846-cut.mp4',
            location: {
            center: [-81.60868, 41.49021],
            zoom: 15.04,
            pitch: 39.15,
            bearing: 0.00,
    },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: '15-minute-city-index-7325649-56mwn0',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'transit-oriented-development-9hgtr4',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'pilot-jason-5i95iq',
                opacity: 1,
                duration: 0//5000
                },
                {
                layer: 'city-boundary-201008994029866-bw2x0v',
                opacity: 0,
                duration: 0//5000
                },
                {
                layer: 'city-landbank-255261706818305-4pb3ld',
                opacity: 0,
                duration: 0//5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
},



        ]

}