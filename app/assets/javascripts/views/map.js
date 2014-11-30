LairBnB.Views.Map = Backbone.CompositeView.extend({
  id: 'map-element',

  initialize: function() {
  	window.view = this;
    this.listenTo(LairBnB.lairs, 'sync', this.renderMarkers)
  },

  initMap: function(){
    // set default starting position
  	var myLatlng = new google.maps.LatLng(0,0);
    var mapOptions = {
      zoom: 2,
      maxZoom: 15,
      center: myLatlng
    };
  	this.map = new google.maps.Map(this.$el[0], mapOptions);
    var map = this.map;

    // recenter map when window resizes
    var getCen = map.getCenter();
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(getCen);
    });
  },

  renderMarkers: function(){
    var that = this;
    var mapBounds = new google.maps.LatLngBounds();
    _.each(LairBnB.lairs.models, function(lair){
      var lat = lair.escape('latitude');
      var lng = lair.escape('longitude');
      var latlng = new google.maps.LatLng(lat, lng);
      that.addMarker(latlng);
      mapBounds.extend(latlng);

    })
    this.map.fitBounds(mapBounds);
  },

  centerMap: function(){

  },

  addMarker: function(latlng){
    var map = this.map;
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    marker.setMap(map);
  },

  render: function(){
  	this.initMap();

    // this.renderMarkers()
  	return this;
  }
});