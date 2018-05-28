/**
 * 
 */

$(function() {
	var vagent = new Vagent();
	
	vagent.addEvent();
	
	

});


function Vagent() {
	
	this.addEvent = function (){
		$("#VAGENT_BTN_GET").click(function(){
			var itemBox = $(this).parent().parent();
			var inpuxVal = $(this).parent().prev().val();
			var method ="GET"
			sandMessage(itemBox, inpuxVal, method);		
		});
		
		$("#VAGENT_BTN_STOP").click(function(){
			var itemBox = $(this).parent().parent();
			var inpuxVal = $(this).parent().prev().val();
			var method ="POST"
			sandMessage(itemBox, inpuxVal, method);		
		});
		
		$("#VAGENT_BTN_START").click(function(){
			var itemBox = $(this).parent().parent();
			var inpuxVal = $(this).parent().prev().val();
			var method ="POST"
			sandMessage(itemBox, inpuxVal, method);		
			
		});
		
		$("#VAGENT_BTN_SET").click(function(){
			var itemBox = $(this).parent().parent();
			var inpuxVal = $(this).parent().prev().val();
			var method ="POST"
			sandMessage(itemBox, inpuxVal, method);					
		});
	};
	
}


function sandMessage (itemBox, messgae, method){
	$("#RESPONSE_TEXT").text("");

	
	var serverURL = $("#SERVER_INPUT_IP").val();	
	serverURL+= messgae;
	
	var params;
		setRequestData(serverURL, params, method, function (responseObject, status, jqXHR){
		
		$(".input-group").removeClass("has-success");
		$(".input-group").removeClass("has-warning");
		$(".input-group").removeClass("has-error");
		
		
		if(status=="success"){
			$(itemBox).addClass("has-success");

		}else{
			$(itemBox).addClass("has-error");
//			$(itemBox).addClass("has-warning");
		}
		
		if(responseObject==""){
			$("#RESPONSE_TEXT").text(status);	
		}else{
			$("#RESPONSE_TEXT").text(responseObject);		
		}
		
	});




};



function setRequestData(url, params, method, rtn) {
	
	  var data ={};
	    data.q = 'test';
	    data.apikey = '947f96c9d2518613faae766eed75bca030ad67d7';
	    data.result = '10';
	    data.output = 'json';


	$.ajax({
		url : url,
		type : method,
		data : data,
		crossOrigin: true,
		success : function(responseData, status, jqXHR) {
			var responseObject = responseData;		
			rtn(responseObject, status);
		},
		error : function( jqXHR, textStatus, errorThrown ) {
			rtn(errorThrown, textStatus);
		}
	});

};

