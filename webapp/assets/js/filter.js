/**
 *@author Asif
 *@date 14/12/2017
 */

$(document).on('change',"select#status",function(){
	var count=1;
   
    	var searchBy=$("#search").val();
    	var $table = $('#filterlogs');
    	var status=$('#status option:selected').val();
    	var urlTosend;
    	urlTosend=createURL(searchBy,status);
    	
    	sendAjaxRequestForMaster($(this),urlTosend+'/'+count+'/10');
    	
    	
    	// execute the below code only where we have this table
    	if ($table.length) {
    		
    	         $("#prev").click(function(e){
    	        	 
    	        	  count=count-1;
    	        	  sendAjaxRequestForMaster($(this),urlToSend+'/'+count+'/10');
    	              e.preventDefault();
    	          });
    	          $("#next").click(function(e){
    	        	  
    	        	  count=count+1;
    	        	  sendAjaxRequestForMaster($(this),urlToSend+'/'+count+'/10');
    	              e.preventDefault();
    	          });
    	}
    	
   
   
})
$(document).ready(function(){
	var count=1;
	sendAjaxRequestForMaster($(this),'http://localhost:8081/AdminService/filterlogs/all/search/'+count+'/10');
    $("#search").keyup(function(){
    	var searchBy=$("#search").val();
    	var $table = $('#filterlogs');
    	var status=$('#status option:selected').val();
    	var urlTosend;
    	urlTosend=createURL(searchBy,status);
    	
    	sendAjaxRequestForMaster($(this),urlTosend+'/'+count+'/10');
    	
    	// execute the below code only where we have this table
    	if ($table.length) {
    		
    	         $("#prev").click(function(e){
    	        	 
    	        	  count=count-1;
    	        	  sendAjaxRequestForMaster($(this),urlToSend+'/'+count+'/10');
    	              e.preventDefault();
    	          });
    	          $("#next").click(function(e){
    	        	  
    	        	  count=count+1;
    	        	  sendAjaxRequestForMaster($(this),urlToSend+'/'+count+'/10');
    	              e.preventDefault();
    	          });
    	}
    	
    });
   
});
function createURL(searchBy,status){

	if(!searchBy){
		return 'http://localhost:8081/AdminService/filterlogs/'+status+'/search';
		
	}
	else{
		return 'http://localhost:8081/AdminService/filterlogs/'+status+'/'+searchBy;
	}
}
function sendAjaxRequestForMaster(element,urlToSend) {
    var clickedButton = element;
 // code for jquery dataTable	
	var $table = $('#filterlogs');
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
								data : 'event_id'
							},
							{
								data : 'timestmp'
							},
							{
								data : 'formatted_message'
							},
							{
								data : 'arg0'
							},
							{
								data : 'arg1'
							},
							{
								data : 'arg2'
							},
							{
								data : 'arg3'
							},
							],
					"destroy": true
				});
		
	}
}
