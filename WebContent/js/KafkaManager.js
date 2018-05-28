/**
 * 
 */


$(function() {
	var page = new KafkaManager();
	
	page.init();
	page.addEvent();
	
	

});


function KafkaManager() {
	
	this.init = function (){
		$("iframe").hide();

	};
	
	this.addEvent = function (){
		$("iframe").on('load', function() {
			$("iframe").show();
		});
	};
}