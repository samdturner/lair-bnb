LairBnB.Views.Sidebar = Backbone.CompositeView.extend({
	initialize: function(){
		// var lairsIndexView = new LairBnB.Views.LairsIndex();
		// this.addSubview('#lairs-index', lairsIndexView);
	},
	template: JST['sidebar'],
	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}

});
