LairBnB.Views.LairIndexItem = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},
	
	template: JST['lairs/indexItem'],

	tagName: 'li',

	className: 'lair-result col-xs-12 col-md-6',

	render: function(){
		var content = this.template({
			lair: this.model,
			owner: this.model.get(['owner'])
		});
		this.$el.html(content);
		initImageCarousel(this, 'mini');
		this.$('.lazy').slickGoTo(0);
		this.attachHoverAction();
		return this;
	},

	attachHoverAction: function(){
		var that = this;
		this.$el.hover(that.toggleBounce.bind(that), that.toggleBounce.bind(that));
		if(this.model.marker){
			this.model.marker.$lairView = this.$el;
		}
		
	},

	toggleBounce: function() {
		var marker = this.model.marker;
	  if (marker.getAnimation() != null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}
})