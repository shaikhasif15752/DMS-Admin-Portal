/**
 *@author Asif
 *@date 16/12/2017
 */

$(function(){
	// code for jquery dataTable
	var $table = $('#masterlist');
	var count=1;
	
	sendAjaxRequest($(this),'http://localhost:8081/AdminService/viewdevice/'+count+'/10');
	// execute the below code only where we have this table
	if ($table.length) {
		
	         $("#prevMaster").click(function(e){
	        	
	        	  count=count-1;
	        	  sendAjaxRequest($(this),'http://localhost:8081/AdminService/viewdevice/'+count+'/10');
	              e.preventDefault();
	          });
	          $("#nextMaster").click(function(e){
	   
	        	  count=count+1;
	        	  sendAjaxRequest($(this),'http://localhost:8081/AdminService/viewdevice/'+count+'/10'); 
	              e.preventDefault();
	          });
	}
});
function sendAjaxRequest(element,urlToSend) {
    var clickedButton = element;
 // code for jquery dataTable	
	var $table = $('#masterlist');
	// execute the below code only where we have this table
	if ($table.length) {
		
		$table.DataTable({
			       
					"bPaginate": false,
					
					ajax : {
						url : urlToSend,
						dataSrc : '',
						dataType: 'json'
					},
					columns : [
						{
								data : 'id'
							},
							{
								data : 'username'
							},
							{
								data : 'device_id'
							},
							{
								data : 'status'
							},
							{
								data : 'valid_till'
							},
						],
						"destroy": true,
				});	
	}
}
