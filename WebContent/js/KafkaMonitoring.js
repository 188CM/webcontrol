/**
 * 
 */


$(function() {
	var page = new KafkaMonitoring();
	
	page.init();
	page.addEvent();
	
	

});


function KafkaMonitoring() {
	
	this.init = function (){
		$("iframe").hide();

	};
	
	this.addEvent = function (){
		$("iframe").on('load', function() {
			$("iframe").show();
		});
	};
}