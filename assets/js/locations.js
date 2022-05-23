




  

    var geocoder;
    var map;
    var address = "new york city";


    //let map;
    function initMap() {
        map = new google.maps.Map( document.getElementById( 'map' ), {

            zoom: 12,
            center: { lat:  53.5461, lng: -113.4938, },
            
            
        });

        //setMarkers(map);
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



        const markers = locations.map((location, i) => {
            return new google.maps.Marker({
              position: location,
              label: labels[i % labels.length],
            });
          });

        new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
    

        }   


        $(document).ready(function() {
            google.maps.event.addListener(map, "idle", function(){
                google.maps.event.trigger(map, 'resize'); 
            });
        }); 

 

        const locations_name = [
            ["LandTran Systems", 53.522158, -113.4176228, 1],
            ["Christina River Acheson", 53.55789, -113.6905789, 2],
            ["Christina River Fort McMurray", 56.5177703,-111.3066333, 3],
            ["Monarch Transport Acheson", 53.55789,-113.6905789, 4],
            ["Continetal Cartage Inc Calgary", 51.0063855,-113.9544398, 5],
            ["Northwoods Oilfield Hauling", 56.5171428,-111.3066463, 6],
            ["Continental Cartage Acheson", 53.55789, -113.6905789, 7],
            ["Detòn Cho Landtran Transport ", 62.448548,-114.4726207, 8],
            ["Monarch Transport Kamloops", 50.7074366,-120.3266768, 9],
            ["Monarch Transport Langley", 49.070005,-122.5395401, 10],
            ["LandTran Logistics", 53.921349,-122.7543787, 11],
            ["Monarch Transport", 50.4467545,-119.1860037, 12],

          ];


          const locations = [
            { lat: 53.522158, lng: -113.4176228 },
            { lat: 53.55789, lng: -113.6905789 },
            { lat: 53.55789, lng: -113.6905789 },
            { lat: 51.0063855, lng: -113.9544398 },
            { lat: 56.5171428, lng: -111.3066463 },
            { lat: 53.55789, lng: -113.6905789 },
            { lat: 62.448548, lng: -114.4726207 },
            { lat: 50.7074366, lng: -120.3266768 },
            { lat: 49.070005, lng: -122.5395401 },
            { lat: 53.921349, lng: -122.7543787 },
            { lat: 50.4467545, lng: -119.1860037 },
            ];

        
        



    function setMarkers(map) {
        // Adds markers to the map.
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        const image = {
          url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32),
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        const shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: "poly",
        };
      
        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i];
          new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
          });
        }

        

      }


      function popUpWindow(map,marker){
        const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">LandTran Systems</h1>' +
        '<div id="bodyContent">' +
        "<p>Address: 9011 50 St NW, Edmonton, AB T6B 2Y2 <br>" +
        "Phone: (780) 468-4300 <br> </p>" +
        '<p>Website: <a href="http://www.landtran.com/">' +
        "Land Tran Systems</a> " +
        "</div>" +
        "</div>";
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
    
      infowindow.open(map, marker);

      }


     



      var myEl = document.getElementById('Christina-Acheson');

        myEl.addEventListener('click', function() {
            map.setZoom(12);
            var latLng = new google.maps.LatLng(53.522158, -113.4176228); //Makes a latlng
            map.panTo(latLng);

            const marker = new google.maps.Marker({
                position: { lat: 53.522158, lng: -113.4176228 },
                map,
                title: "Uluru (Ayers Rock)",
              });
            
            popUpWindow(map,marker);
        }, false);


      
     