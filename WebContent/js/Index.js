/**
 * 
 */


$(function() {
	var page = new Index();
	
	page.init();
	page.addEvent();
	
	

});


function Index() {
	
	this.init = function (){
		$("iframe").hide();
	};
	
	this.addEvent = function (){
		$("iframe").on('load', function() {
			$("iframe").show();
		});
		
	};
}