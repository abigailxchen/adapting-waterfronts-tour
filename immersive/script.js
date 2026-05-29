// Global Variables --------------------------------------------------------------

const allMarkersData = [
    { id: 1, coords: [-122.400517, 37.78745] },
    { id: 2, coords: [-122.397587, 37.789784] },
    { id: 3, coords: [-122.399158, 37.791027] },
    { id: 4, coords: [-122.399789, 37.792266] },
    { id: 5, coords: [-122.402592, 37.791905] },
    { id: 6, coords: [-122.403138, 37.79468] },
    { id: 7, coords: [-122.397809, 37.794438] },
    { id: 8, coords: [-122.395638, 37.793845] }
];

let allMarkers = [];
let markersActivated = false;

var initLoad = true;

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

let activeImageChapterId = null;

// Postcard elements
const postcard = document.getElementById("postcard");
const postcardImg = document.getElementById("postcard-image");


// Helper Functions --------------------------------------------------------------

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

// Helper function to fade in map layers
function fadeInLayer(layerId, targetOpacity = 0.7, duration = 1000) {
    const start = performance.now();
    const initialOpacity = parseFloat(map.getPaintProperty(layerId, 'fill-opacity')) || 0;

    function animate(time) {
        const elapsed = time - start;
        let progress = elapsed / duration;
        if (progress > 1) progress = 1;

        const currentOpacity = initialOpacity + progress * (targetOpacity - initialOpacity);
        map.setPaintProperty(layerId, 'fill-opacity', currentOpacity);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Helper function to crossfade between past, present, future historic images 
function crossfadeImage(layerId, src) {
    const targetImg = document.getElementById(layerId);

    if (targetImg.src !== src) targetImg.src = src;

    targetImg.style.opacity = 1;
    overlayImages.forEach(img => {
        if (img !== targetImg) img.style.opacity = 0;
    });
}

// Helper function to calculate opacity based on progress (fade in/out first/last 10%)
function getOpacity(progress) {
    if (progress < 0.1) return progress / 0.1;          // fade in 0 → 1
    if (progress > 0.9) return 1 - (progress - 0.9)/0.1; // fade out 1 → 0
    return 1;                                          // fully visible
}

// Doing things -----------------------------------------------------------

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');
var header = document.createElement('div');

// Create HTML elements for each config element
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

// Create HTML element for each config element -----------------------------------------------------------
config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    chapter.classList.add('chapter-content');

    if (record.icon) {
        const iconImg = document.createElement('img');
        iconImg.src = record.icon;
        iconImg.classList.add('chapter-icon');
        chapter.appendChild(iconImg);
    }

    if (record.topImage) {
        const topImg = document.createElement('img');
        topImg.src = record.topImage;
        topImg.classList.add('chapter-top-image');
        chapter.appendChild(topImg);
    }

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    if (record.caption) {
        var caption = document.createElement('p');
        caption.innerHTML = record.caption;
        caption.classList.add('caption');
        chapter.appendChild(caption);
    }

    if (record.image_bottomleft) {
        const imageBottomLeft = document.createElement('img');
        imageBottomLeft.src = record.image_bottomleft;
        imageBottomLeft.classList.add('image-bottomleft');
        chapter.appendChild(imageBottomLeft);
    }

    if (record.image_bottomright) {
        const imageBottomRight = document.createElement('img');
        imageBottomRight.src = record.image_bottomright;
        imageBottomRight.classList.add('image-bottomright');
        chapter.appendChild(imageBottomRight);
    }

    if (record.image_topright) {
        const imageTopRight = document.createElement('img');
        imageTopRight.src = record.image_topright;
        imageTopRight.classList.add('image-topright');
        chapter.appendChild(imageTopRight);
    }


    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// CREATE MAP -----------------------------------------------------------------------------------------------------------------
var map = new mapboxgl.Map({
    container: 'map',
    accessToken: 'pk.eyJ1IjoiZ3NjYWxlczEiLCJhIjoiY2lmYTRzaTR6MXZ5YXN4bTdlaGhyd3p5cCJ9.SbzvLXEXELLm5Iizz4eVgQ',
    style: 'mapbox://styles/gscales1/cmltwgq8g001z01r4fj5674qc',  // 'mapbox://styles/mapbox/standard' for default standard
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    projection: config.projection
});

map.on('error', (e) => {
    console.error('Mapbox error:', e.error ? e.error.message : e);
  });

  map.on('load', () => {
    console.log('Map loaded successfully! Style is accessible.');
  });

// instantiate the scrollama
var scroller = scrollama();

// LOAD MAP -----------------------------------------------------------------------------------------------------------------
map.on("load", function () {
    // Add Shoreline --------------------------------------------------------------------
    map.addSource('shoreline', {
        'type': 'vector',
        'url': 'mapbox://gscales1.1koo04dg' // Replace with Tileset ID
    });

    map.addLayer({
        'id': 'shoreline',
        'type': 'fill',
        'source': 'shoreline',
        'source-layer': 'bayfill_KML', // Replace with Tileset Vector Layer name
        'paint': {
        'fill-color': '#68BFFB',
        'fill-opacity': 0.4
        }
    });

    // Add 6ft SLR --------------------------------------------------------------------
    map.addSource('6ftslr', {
        'type': 'vector',
        'url': 'mapbox://gscales1.2fbkgkhm' // Replace with Tileset ID
    });

    map.addLayer({
        'id': '6ftslr',
        'type': 'fill',
        'source': '6ftslr',
        'source-layer': '6ft_SLR_KML', // Replace with Tileset Vector Layer name
        'paint': {
        'fill-color': '#41A7FF',
        'fill-opacity': 0
        }
    });


    // Add Route --------------------------------------------------------------------
    map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': [
            [-122.400517,37.78745],
            [-122.397587,37.789784],
            [-122.399158,37.791027],
            [-122.399584,37.791348],
            [-122.399789,37.792266],
            [-122.402592,37.791905],
            [-122.403138,37.79468],
            [-122.398016,37.79534],
            [-122.397809,37.794438],
            [-122.396609,37.79459],
            [-122.396324,37.793286],
            [-122.395638, 37.793845]
            ]
        }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#363636',
        'line-width': 6
        }
    });

    // Add Info Button Logic --------------------------------------------------------------------
      const infoBtn = document.getElementById("infoBtn");
      const infoOverlay = document.getElementById("infoOverlay");
      const closeBtn = infoOverlay.querySelector(".closeBtn");

      infoBtn.addEventListener("click", () => {
        infoOverlay.style.display = "flex";
      });

      closeBtn.addEventListener("click", () => {
        infoOverlay.style.display = "none";
      });

    // Add Layer Toggle Logic --------------------------------------------------------------------
    const layerButtons = document.querySelectorAll('.layer-toggle');

    layerButtons.forEach(button => {
        const layerId = button.dataset.layer;

        // Set default states
        if (layerId === '6ftslr') {
            map.setPaintProperty(layerId, 'fill-opacity', 0);
            button.classList.remove('active');
        } else {
            map.setPaintProperty(layerId, 'fill-opacity', 0.7);
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            const currentOpacity = parseFloat(map.getPaintProperty(layerId, 'fill-opacity')) || 0;

            if (currentOpacity > 0) {
                map.setPaintProperty(layerId, 'fill-opacity', 0);
                button.classList.remove('active');
            } else {
                fadeInLayer(layerId, 0.7, 250);
                button.classList.add('active');
            }
        });
    });

    // Create markers --------------------------------------------------------------------
    allMarkersData.forEach(markerData => {

        // Create marker HTML element
        const el = document.createElement('div');
        el.className = 'numbered-marker';
        el.innerText = markerData.id;

        const marker = new mapboxgl.Marker({
                element: el,
                anchor: 'center'
            })
            .setLngLat(markerData.coords)
            .addTo(map);

        // Hide initially
        // el.style.display = 'none';

        allMarkers.push(marker);
    });


    // Set up scroller instance, pass callback functions ---------------------------------------------------
    scroller

    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })

    // ON ENTER ---------------------------------------------------------------------------------------------
    .onStepEnter(async response => {
        const chapterId = response.element.id;
        const chapter = config.chapters.find(chap => chap.id === chapterId);

        // Load and crossfade images-------------------------------------------------------------------------
        const overlayImages = document.querySelectorAll('.overlay-image');

        if (chapter.imageLayer && chapter.imageSrc) {
            const targetImg = document.getElementById(chapter.imageLayer);

            // Update src if changed
            if (targetImg.src !== chapter.imageSrc) {
                targetImg.src = chapter.imageSrc;
            }

            // Fade in target image
            targetImg.style.transition = 'opacity 1s ease';
            targetImg.style.opacity = 1;

            // Fade out all other images
            overlayImages.forEach(img => {
                if (img !== targetImg) {
                    img.style.transition = 'opacity 1s ease';
                    img.style.opacity = 0;
                }
            });
        } else {
            // No image for this chapter → fade out all images
            overlayImages.forEach(img => {
                img.style.transition = 'opacity 1s ease';
                img.style.opacity = 0;
            });
        }

        // CAPTION ------------------------------------------------------------------------------
        const captionContainer = document.getElementById("caption-container");
        const caption = document.getElementById("caption");

        // Always show container when caption exists
        if (chapter.captionImage) {

            captionContainer.style.opacity = 1;

            caption.src = chapter.captionImage;
            caption.style.opacity = 1;

            const pos = chapter.captionPosition || {};

            const top = pos.top ?? '50%';
            const left = pos.left ?? '50%';

            caption.style.top = top;
            caption.style.left = left;

            caption.style.width = pos.width || '220px';

            const rotate = pos.rotate || '0deg';

            caption.style.transform =
                `translate(-50%, -50%) rotate(${rotate})`;

        } else {
            captionContainer.style.opacity = 0;
            caption.style.opacity = 0;
        }


        // Add postcards -------------------------------------------------------------------------------
        if (chapter.postcard) {
            postcardImg.src = chapter.postcard;

            // reset starting position
            postcard.style.transform =
                "translate(-50%, -50%) translateX(-120vw)";

            postcard.style.opacity = 1;

        } else {
            postcard.style.opacity = 0;
        }
    
        response.element.classList.add('active');
        // Create animation options with duration control
        const animationOptions = {
            ...chapter.location,
            duration: chapter.duration || 500, // default = 1 second
        };

        map[chapter.mapAnimation || 'flyTo'](animationOptions);


        // Load markers on second frame 
        if (!markersActivated && response.element.id === 'route-1.1') {
            allMarkers.forEach(marker => {
                marker.getElement().style.display = 'flex';
            });

            markersActivated = true;
        }

        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
        if (config.auto) {
            var next_chapter = (current_chapter + 1) % config.chapters.length;
            map.once('moveend', () => {
                document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
            });
        }

        // if (response.element.id === 'endroute') {
        //     fadeInLayer('6ftslr', 0.7, 2000); // 2-second fade-in
        // }
    }
    )

    // ON EXIT ---------------------------------------------------------------------------------------------
    .onStepExit(response => {
        const chapter = config.chapters.find(
            chap => chap.id === response.element.id
        );

        response.element.classList.remove('active');

    })

    // ON PROGRESS ---------------------------------------------------------------------------------------------
    .onStepProgress(response => {
        const chapterId = response.element.id;
        const chapter = config.chapters.find(chap => chap.id === chapterId);

        if (!chapter || !chapter.postcard) return;

        const progress = response.progress;
        const animationType = chapter.postcardAnimation || "fly";

        const eased = progress * progress * (3 - 2 * progress); // smoothstep
        const easedProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI); // cosine ease

        // Helper: fade in/out first/last 10%
        const opacity = (() => {
            if (progress < 0.1) return progress / 0.1;
            if (progress > 0.9) return 1 - (progress - 0.9)/0.1;
            return 1;
        })();

        // ✈️ FLY
        if (animationType === "fly") {
            const startX = -90, endX = 90;
            const x = startX + (endX - startX) * eased;
            const arcHeight = 8;
            const y = Math.sin(eased * Math.PI) * arcHeight;
            const rotation = Math.sin(eased * Math.PI) * 5;
            const scale = 0.95 + 0.08 * Math.sin(eased * Math.PI);

            postcard.style.transform =
                `translate(-50%, -50%) translateX(${x}vw) translateY(${-y}vw) rotate(${rotation}deg) scale(${scale})`;
            postcard.style.opacity = opacity;
        }

        // 🔎 ZOOM
        else if (animationType === "zoom") {
            const scale = 0.2 + easedProgress;
            const rotation = (1 - easedProgress) * 10;

            postcard.style.transform =
                `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
            postcard.style.opacity = opacity;
        }

        // 🌬 FLOAT
        else if (animationType === "float") {
            const startX = -80, endX = 80;
            const x = startX + (endX - startX) * eased;
            const driftY = Math.sin(eased * Math.PI) * 6;
            const rotation = Math.sin(eased * Math.PI * 1.5) * 6;
            const scale = 0.97 + 0.05 * Math.sin(eased * Math.PI);

            postcard.style.transform =
                `translate(-50%, -50%) translateX(${x}vw) translateY(${driftY}vw) rotate(${rotation}deg) scale(${scale})`;
            postcard.style.opacity = opacity;
        }

        // 🌀 SPIN
        else if (animationType === "spin") {
            const startX = -120, startY = -80;
            const endX = 0, endY = 0;
            const x = startX + (endX - startX) * eased;
            const y = startY + (endY - startY) * eased;
            const rotation = Math.sin(eased * Math.PI) * 45;
            const scale = 0.85 + 0.15 * eased;
            const overshoot = Math.sin(eased * Math.PI) * 5;
            const finalY = y + overshoot;

            postcard.style.transform =
                `translate(-50%, -50%) translateX(${x}vw) translateY(${finalY}vw) rotate(${rotation}deg) scale(${scale})`;
            postcard.style.opacity = opacity;
        }

        // 🌊 WATER BOB
        else if (animationType === "water") {
            const startX = -70, endX = 70;
            const x = startX + (endX - startX) * eased;
            const bob = Math.sin(eased * Math.PI * 4) * 4;
            const rotation = Math.sin(eased * Math.PI * 2) * 3;

            postcard.style.transform =
                `translate(-50%, -50%) translateX(${x}vw) translateY(${bob}vw) rotate(${rotation}deg) scale(1)`;
            postcard.style.opacity = opacity;
        }

        // 📬 MAIL DROP
        else if (animationType === "mail") {
            const y = -100 + eased * 150;  // increase 100 → 150 for a lower drop
            const bounce = Math.sin(eased * Math.PI) * 6;

            postcard.style.transform =
                `translate(-50%, -50%) translateY(${y + bounce}vh) scale(${0.9 + eased*0.1})`;
            postcard.style.opacity = opacity;
        }
    });
});    