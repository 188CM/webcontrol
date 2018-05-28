/**
 * 
 */


$(function() {
	var page = new InfluxdbUi();
	
	page.init();
	page.addEvent();
	
	

});


function InfluxdbUi() {
	
	this.init = function (){
		$("iframe").hide();

	};
	
	this.addEvent = function (){
		$("iframe").on('load', function() {
			$("iframe").show();
		});
	};
}