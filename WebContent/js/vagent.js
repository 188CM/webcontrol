/**
 * 
 */

$(function() {
	var vagent = new Vagent();
	
	vagent.addEvent();
	
	

});


function Vagent() {
	
	this.addEvent = function (){
		$("#VAGENT_BTN_STOP").click(function(){
			setResponset($(this).parent().parent(), $(this).parent().prev().val());		
		});
		
		$("#VAGENT_BTN_START").click(function(){
			setResponset($(this).parent().parent(), $(this).parent().prev().val());
			
		});
		
		$("#VAGENT_BTN_SET").click(function(){
			setResponset($(this).parent().parent(), $(this).parent().prev().val());
			
		});
	};
	
}


function setResponset (thiss, messgae){
	var serverURL = $("#SERVER_INPUT_IP").val();	
	serverURL+= messgae;
	
	var params;
	var method = "POST";
	setRequestData(serverURL, params, method, function (responseObject, status, jqXHR){
		
		$(".input-group").removeClass("has-success");
		$(".input-group").removeClass("has-warning");
		$(".input-group").removeClass("has-error");
		
		if(status=="success"){
//			$(thiss).addClass("has-warning");

			$(thiss).addClass("has-success");

		}else{
			$(thiss).addClass("has-error");

		}
		
		$("#RESPONSE_TEXT").text(responseObject);		
		
		
		
	})




};



function setRequestData(url, params, method,  rtn) {
	$.ajax({
		url : url,
		type : method,
		data : params,
		success : function(responseData, status, jqXHR) {
			var responseObject = responseData;			
		},
		error : function(err,message) {
			rtn(message, message);
		}
	});
};
