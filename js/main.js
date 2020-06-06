mapboxgl.accessToken = 'pk.eyJ1IjoidWNsYWlvZXMiLCJhIjoiY2thYnE5Njd0MHp4bTJ1bWdxZjd2Mzd2YyJ9.mMldDfE2SSFNrFhxr3ZLag';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-118.445278, 34.069444], // starting position [lng, lat]
  zoom: 1 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());
// load external geojson 
map.on('load', function () {

  map.loadImage(
    // https://labs.mapbox.com/maki-icons/
    './img/recycling-bottle@2x.png',
    function (error, image) {
      if (error) throw error;
      map.addImage('icon-marker', image);

      map.addSource('recycle', {
        type: 'geojson',
        data: '../data/regions.geojson'
      });

      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'recycle',
        'layout': {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': 'icon-marker',
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': ['Roboto Medium'],
          'text-offset': [0, 1.6],
          'text-anchor': 'top'
        }
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'points', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var title = '<h3>' + e.features[0].properties.title + '</h3>';
        var description = '<p>' + e.features[0].properties.description + '</p>';
        var deposit = '<p>Deposit: ' + e.features[0].properties.deposit + '</p>';
        var containers_covered = '<p>Containers Covered: ' + e.features[0].properties.containers_covered + '</p>';
        var pet_deposit_legislation = '<p>PET Legislation: ' + e.features[0].properties.pet_deposit_legislation + '</p>';
        var pet_consumed = '<p>PET Consumed: ' + e.features[0].properties.pet_consumed + '</p>';
        var pet_recollection_rate = '<p>PET Recollection Rate: ' + e.features[0].properties.pet_recollection_rate + '</p>';
        var pet_recycling_rate = '<p>PET Recycling Rate: ' + e.features[0].properties.pet_recycling_rate + '</p>';
        var state_agency = '<p>State Agency: ' + e.features[0].properties.state_agency + '</p>';
        var citation_1_title = e.features[0].properties.citation_1_title;
        var citation_1_url = e.features[0].properties.citation_1_url;
        var citation_2_title = e.features[0].properties.citation_2_title;
        var citation_2_url = e.features[0].properties.citation_2_url;
        var citation_3_title = e.features[0].properties.citation_3_title;
        var citation_3_url = e.features[0].properties.citation_3_url;
        var citation_4_title = e.features[0].properties.citation_4_title;
        var citation_4_url = e.features[0].properties.citation_4_url;
        var citation_5_title = e.features[0].properties.citation_5_title;
        var citation_5_url = e.features[0].properties.citation_5_url;
        var citation_6_title = e.features[0].properties.citation_6_title;
        var citation_6_url = e.features[0].properties.citation_6_url;
        var citation_7_title = e.features[0].properties.citation_7_title;
        var citation_7_url = e.features[0].properties.citation_7_url;
        var citation_1 = "";
        var citation_2 = "";
        var citation_3 = "";
        var citation_4 = "";
        var citation_5 = "";
        var citation_6 = "";
        var citation_7 = "";
        var citations;

        if (citation_1_url.length) {
          var citation_1 = '<a href=' + citation_1_url + '>' + citation_1_title + '</a>';
        }


        if (citation_2_url.length) {
          var citation_2 = '<a href=' + citation_2_url + '>' + citation_2_title + '</a>';
        }


        if (citation_3_url.length) {
          var citation_3 = '<a href=' + citation_3_url + '>' + citation_3_title + '</a>';
        }


        if (citation_4_url.length) {
          var citation_4 = '<a href=' + citation_4_url + '>' + citation_4_title + '</a>';
        }

        if (citation_5_url.length) {
          var citation_5 = '<a href=' + citation_5_url + '>' + citation_5_title + '</a>';
        }

        if (citation_6_url.length) {
          var citation_6 = '<a href=' + citation_6_url + '>' + citation_6_title + '</a>';
        }

        if (citation_7_url.length) {
          var citation_7 = '<a href=' + citation_7_url + '>' + citation_7_title + '</a>';
        }

        var citations = citation_1 + citation_2 + citation_3 + citation_4 + citation_5 + citation_6 + citation_7;


        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(title + description + deposit + containers_covered + pet_deposit_legislation + pet_consumed + pet_recollection_rate + pet_recycling_rate + state_agency + '<small>Source: ' + citations + '</small>')
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
      });


    }
  );

});