var config = {
    use3dTerrain: false,
    auto: false,
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    chapters: [
        // BEGINNING ----------------------------------------------------------------------------------------------------
        {
            id: 'beginning',
            alignment: 'left',
            hidden: false,
            icon: 'assets/AW_Logo.png',
            title: 'Welcome to the Adapting Waterfronts San Francisco Tour!',
            description: "Dive into an immersive tour through San Francisco’s historic downtown that explores how the city’s waterfront has evolved, and how design and imagination can help us re-envision its future. Please enter fullscreen and scroll slowly for the best experience.",
            caption: "Created by Gabriel Tenaya Kaprielian, Web Design by Abigail Chen",
            location: {
                center: [-122.40856, 37.79080],
                zoom: 13.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        // LOCATION 1 ----------------------------------------------------------------------------------------------------
        {
            id: 'route-1.1',
            hidden: true,
            location: {
                center: [-122.39936, 37.79172],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-1.2',
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.1',
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.2',
            imageLayer: "image-present",  
            imageSrc: "./assets/1_Present.jpg",
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.3',
            imageLayer: "image-past",  
            imageSrc: "./assets/1_Past.jpg",
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.4',
            alignment: 'left',
            imageLayer: "image-past",  
            imageSrc: "./assets/1_Past.jpg",
            hidden: false,
            title: 'Mission & New Montgomery',
            description: "You're looking at a historic photo of an unpaved Mission Street. Can you believe that before development, this area was once a sand dune and coastal prairie? It was home to a diverse community of animals such as the coyote, brush rabbit, and northern harrier. The coastal prairie is one of the most endangered ecosystems! What if Mission Street was returned to its original ecology, replacing the concrete with dune scrub and plants, like the Douglas Iris and baby blue eyes?",
            caption: 'Photo: Horace Chaffee / SF Department of Public Works',
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
         },
        {
            id: 'story-1.5',
            captionImage:  './assets/1_Caption.png',
            captionPosition: {
                top: '30%',
                left: '65%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-past2",  
            imageSrc: "./assets/1_Past_2.jpg",
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.6',
            imageLayer: "image-future",  
            imageSrc: "./assets/1_Future.jpg",
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 21,
                pitch: 80,
                bearing: 55
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-1.7',
            hidden: true,
            alignment: 'right',
            imageLayer: "image-future",  
            imageSrc: "./assets/1_Future.jpg",
            postcard: './assets/1_Postcard.png',
            postcardAnimation: 'fly',
            location: {
                center: [-122.400517,37.78745],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-1.3',
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-1.4',
            hidden: true,
            location: {
                center: [-122.400517,37.78745],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        // LOCATION 2 ----------------------------------------------------------------------------------------------------

        {
            id: 'route-2.1',
            hidden: true,
            location: {
                center: [-122.397587,37.789784],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-2.2',
            hidden: true,
            location: {
                center: [-122.397587,37.789784],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.1',
            hidden: true,
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/2_Present.jpg",
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/2_Past.jpg",
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.4',
            alignment: 'left',
            hidden: false,
            title: 'Mission & 1st Street',
            imageLayer: "image-past",  
            imageSrc: "./assets/2_Past.jpg",
            description: 'You are standing on the edge of the historic shoreline of San Francisco! Can you imagine what it looked like at this beach before the city was built? With rising sea levels, the shoreline may return to its original location. A managed retreat is one adaptation strategy that removes parts of the city at risk of flooding.',
            caption: 'Photo: Horace Chaffee / SF Department of Public Works',
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.5',
            hidden: true,
            captionImage:  './assets/2_Caption.png',
            captionPosition: {
                top: '60%',
                left: '65%',
                width: '600px',
                rotate: '0deg'
            },
            imageLayer: "image-past2",  
            imageSrc: "./assets/2_Past_2.jpg",
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.6',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/2_Future.jpg",
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-2.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/2_Future.jpg",
            postcard: './assets/2_Postcard.png',
            postcardAnimation: "zoom",
            location: {
                center: [-122.397587,37.789784],
                zoom: 20,
                pitch: 85,
                bearing: -44
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-2.3',
            hidden: true,
            location: {
                center: [-122.397587,37.789784],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-2.4',
            hidden: true,
            location: {
                center: [-122.397587,37.789784],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        // LOCATION 3 ----------------------------------------------------------------------------------------------------
        {
            id: 'route-3.1',
            hidden: true,
            location: {
                center: [-122.399158,37.791027],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-3.2',
            hidden: true,
            location: {
                center: [-122.399158,37.791027],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-3.1',
            hidden: true,
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-3.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/3_Present.jpg",
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-3.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/3_Past.jpg",
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

                {
            id: 'story-3.4',
            alignment: 'left',
            hidden: false,
            topImage: './assets/3_Ship.png',
            imageLayer: "image-past",  
            imageSrc: "./assets/3_Past.jpg",
            title: 'Market & 1st Street',
            caption: 'Photo: Courtesy of a Private Collector',
            description: 'Canals can be used as part of a larger climate adaptation strategy for coastal cities. They can store excess water during heavy rainfall and relieve pressure on rising groundwater and saltwater intrusion caused by rising sea levels.',
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-3.5',
            hidden: true,
            imageLayer: "image-past2",  
            imageSrc: "./assets/3_Past2.jpg",
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-3.6',
            hidden: true,
            captionImage:  './assets/3_Caption.png',
            captionPosition: {
                top: '60%',
                left: '60%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-future",  
            imageSrc: "./assets/3_Future.jpg",
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-3.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/3_Future.jpg",
            postcard: './assets/3_Postcard.png',
            postcardAnimation: 'float',
            location: {
                center: [-122.399158,37.791027],
                zoom: 20,
                pitch: 80,
                bearing: 40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-3.3',
            hidden: true,
            location: {
                center: [-122.399158,37.791027],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-3.4',
            hidden: true,
            location: {
                center: [-122.399158,37.791027],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
         // LOCATION 4 ----------------------------------------------------------------------------------------------------
        {
            id: 'route-4.1',
            hidden: true,
            location: {
                center: [-122.399789,37.792266],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-4.2',
            hidden: true,
            location: {
                center: [-122.399789,37.792266],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-4.1',
            hidden: true,
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-4.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/4_Present.jpg",
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-4.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/4_Past.jpg",
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-4.4',
            alignment: 'left',
            hidden: false,
            title: 'Battery & Pine Street',
            topImage: './assets/4_Egret.png',
            imageLayer: "image-past",  
            imageSrc: "./assets/4_Past.jpg",
            caption: 'Photo: Horace Chaffee / SF Department of Public Works',
            description: 'If you were standing here in the early 1800s you would be knee deep in water. Many streets in downtown San Francisco have covered up the intertidal ecosystem that existed between high and low tide.',
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-4.5',
            hidden: true,
            captionImage:  './assets/4_Caption.png',
            captionPosition: {
                top: '55%',
                left: '65%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-past2",  
            imageSrc: "./assets/4_Past2.jpg",
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-4.6',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/4_Future.jpg",
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'story-4.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/4_Future.jpg",
            postcard: './assets/4_Postcard.png',
            postcardAnimation: 'fly', 
            location: {
                center: [-122.399789,37.792266],
                zoom: 21,
                pitch: 80,
                bearing: 170
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-4.3',
            hidden: true,
            location: {
                center: [-122.399789,37.792266],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-4.4',
            hidden: true,
            location: {
                center: [-122.399789,37.792266],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

         // LOCATION 5 ----------------------------------------------------------------------------------------------------
         {
            id: 'route-5.1',
            hidden: true,
            location: {
                center: [-122.402592,37.791905],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-5.2',
            hidden: true,
            location: {
                center: [-122.402592,37.791905],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-5.1',
            hidden: true,
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-5.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/5_Present.jpg",
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
                {
            id: 'story-5.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/5_Past.jpg",
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-5.4',
            alignment: 'left',
            hidden: false,
            title: 'Pine & Montgomery Street',
            imageLayer: "image-past",  
            imageSrc: "./assets/5_Past.jpg",
            caption: 'Photo: Lawrence & Houseworth / Courtesy of Golden Gate NRA, Park Archives',
            description: 'This was the location of a coast live oak woodland adapted to live by the ocean. These oak trees relied on coastal fog for moisture during the summer and grew smaller due to the sandy soil. Trees not only provide shade and shelter for many species but also play a significant role in climate mitigation and adaptation. They store carbon and can help reduce temperatures.',
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-5.6',
            alignment: 'left',
            hidden: true,
            captionImage:  './assets/5_Caption.png',
            captionPosition: {
                top: '55%',
                left: '75%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-future",  
            imageSrc: "./assets/5_Future.jpg",
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-5.7',
            alignment: 'right',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/5_Future.jpg",
            postcard: './assets/5_Postcard.png',
            postcardAnimation: 'water',
            location: {
                center: [-122.402592,37.791905],
                zoom: 21,
                pitch: 83,
                bearing: 80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-5.3',
            hidden: true,
            location: {
                center: [-122.402592,37.791905],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-5.4',
            hidden: true,
            location: {
                center: [-122.402592,37.791905],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

         // LOCATION 6 ----------------------------------------------------------------------------------------------------

        {
            id: 'route-6.1',
            hidden: true,
            location: {
                center: [-122.403138,37.79468],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-6.2',
            hidden: true,
            location: {
                center: [-122.403138,37.79468],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-6.1',
            hidden: true,
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
                {
            id: 'story-6.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/6_Present.jpg",
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-6.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/6_Past.jpg",
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
                {
            id: 'story-6.4',
            alignment: 'left',
            hidden: false,
            title: 'Montgomery & Clay Street',
            topImage: './assets/6_Diver.png',
            imageLayer: "image-past",  
            imageSrc: "./assets/6_Past.jpg",
            caption: 'Photo: Courtesy of Vicky Walker, Bernal History Project',
            description: 'Imagine a giant public pool in downtown San Francisco. Would you swim in it? The historic Fleishhacker Pool was once located at Ocean Beach and measured 1000’ long! A pool providing public recreation in the summer can also double as resilient stormwater infrastructure. It can retain rainwater during severe atmospheric river events to avoid compound flooding due to sea level rise.',
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-6.5',
            hidden: true,
            title: 'Montgomery & Clay Street',
            captionImage:  './assets/6_Caption.png',
            captionPosition: {
                top: '65%',
                left: '65%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-past2",  
            imageSrc: "./assets/6_Past2.jpg",
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-6.6',
            alignment: 'left',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/6_Future.jpg",
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-6.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/6_Future.jpg",
            postcard: "./assets/6_Postcard.png",
            postcardAnimation: 'fly',
            location: {
                center: [-122.403138,37.79468],
                zoom: 20,
                pitch: 80,
                bearing: 167
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-6.3',
            hidden: true,
            location: {
                center: [-122.403138,37.79468],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-6.4',
            hidden: true,
            location: {
                center: [-122.403138,37.79468],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },


         // LOCATION 7 ----------------------------------------------------------------------------------------------------

        {
            id: 'route-7.1',
            hidden: true,
            location: {
                center: [-122.397809,37.794438],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-7.2',
            hidden: true,
            location: {
                center: [-122.397809,37.794438],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-7.1',
            hidden: true,
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'story-7.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/7_Present.jpg",
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

                {
            id: 'story-7.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/7_Past.jpg",
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-7.4',
            alignment: 'left',
            hidden: false,
            title: 'Davis & Sacramento Street',
            imageLayer: "image-past",  
            imageSrc: "./assets/7_Past.jpg",
            caption: 'Photo: Horace Chaffee / SF Department of Public Works',
            description: 'You are standing on reclaimed land, or land that was built on what used to be water! As sea levels rise, these areas are some of the most vulnerable to flooding. The Embarcadero Center, built on what used to be Yerba Buena Cove, contains raised walkways that accommodate the rising Bay waters.',
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-7.6',
            alignment: 'left',
            hidden: true,
            captionImage:  './assets/7_Caption.png',
            captionPosition: {
                top: '60%',
                left: '58%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-future",  
            imageSrc: "./assets/7_Future.jpg",
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
         {
            id: 'story-7.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/7_Future.jpg",
            postcard: './assets/7_Postcard.png',
            postcardAnimation: 'water',
            location: {
                center: [-122.397809,37.794438],
                zoom: 22,
                pitch: 83,
                bearing: -10
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-7.3',
            hidden: true,
            location: {
                center: [-122.397809,37.794438],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-7.4',
            hidden: true,
            location: {
                center: [-122.397809,37.794438],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

         // LOCATION 8 ----------------------------------------------------------------------------------------------------
        {
            id: 'route-8.1',
            hidden: true,
            location: {
                center: [-122.395638, 37.793845],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        
        {
            id: 'route-8.2',
            hidden: true,
            location: {
                center: [-122.395638, 37.793845],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.1',
            hidden: true,
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52         
             },
             duration: 2000,
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.2',
            hidden: true,
            imageLayer: "image-present",  
            imageSrc: "./assets/8_Present.jpg",
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.3',
            hidden: true,
            imageLayer: "image-past",  
            imageSrc: "./assets/8_Past.jpg",
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.4',
            alignment: 'left',
            hidden: false,
            title: 'Market & Spear Street',
            imageLayer: "image-past",  
            imageSrc: "./assets/8_Past.jpg",
            caption: 'Photo: Courtesy of a Private Collector',
            description: 'Did you know that there used to be a highway in front of the Ferry Building? The Embarcadero Freeway divided the city from the bay waters and was hugely unpopular. After the 1989 earthquake, it collapsed and was removed.',
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.6',
            hidden: true,
            captionImage:  './assets/8_Caption.png',
            captionPosition: {
                top: '67%',
                left: '75%',
                width: '500px',
                rotate: '0deg'
            },
            imageLayer: "image-future",  
            imageSrc: "./assets/8_Future.jpg",
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'story-8.7',
            hidden: true,
            imageLayer: "image-future",  
            imageSrc: "./assets/8_Future.jpg",
            postcard: "./assets/8_Postcard.png",
            postcardAnimation: 'zoom',
            location: {
                center: [-122.395638, 37.793845],
                zoom: 21,
                pitch: 90,
                bearing: 52   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
        {
            id: 'route-8.3',
            hidden: true,
            location: {
                center: [-122.395638, 37.793845],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },

        {
            id: 'route-8.4',
            hidden: true,
            location: {
                center: [-122.395638, 37.793845],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        },
         // END ----------------------------------------------------------------------------------------------------

         {
            id: 'end',
            alignment: 'left',
            icon: './assets/AW_Logo.png',
            hidden: false,
            title: 'Thank You for Coming Along this Journey!',
            description: 'Adapting Waterfronts is a self-guided augmented reality tour along San Francisco’s historic downtown. The project invites the public to explore the past, present, and potential future transformations of the city’s shoreline as it adapts to climate change by visualizing installations at 8 designated locations. Supported by funds from the Research, Scholarly and Creative Activities (RCSA) Grant Program at the California Polytechnic State University in San Luis Obispo.',
            caption: 'Created by Gabriel Tenaya Kaprielian, Web & Brand Design by Abigail Chen',
            location: {
                center: [-122.40856, 37.79080],
                zoom: 13.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
        }
    ]
};

let activeGifChapterId = null;
