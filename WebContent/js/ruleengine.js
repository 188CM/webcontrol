/**
 * 
 */

$(function() {
	var ruleengine = new Ruleengine();
	
	ruleengine.addEvent();
	
	

	document.cookie = "_name2=" + "cValue2; domain=http://www.gscdn.com";

	
//	$.cookie("currentdatabase", "demoV1", {path: "/", domain: "http://influxui.s3-website-us-east-1.amazonaws.com"});
//	$.cookie("currentserver", "medium.influxDB", {path: "/", domain: "http://influxui.s3-website-us-east-1.amazonaws.com"});
//	$.cookie("servers", '[{"name":"medium.influxDB","url":"http://52.78.112.82:8086"},{"name":"t2.influxDB","url":"http://13.125.125.226:8086"}]', {path: "/", domain: "http://influxui.s3-website-us-east-1.amazonaws.com"});


});


function Ruleengine() {
	
	this.addEvent = function (){
		
		$(".btn-default").click(function(){
			var itemBox = $(this).parent().parent();
			var inpuxVal = $(this).parent().prev().val();
			var method =$(this).parent().prev().prev().text().replace("@","");
				
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

