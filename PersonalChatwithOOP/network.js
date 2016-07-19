// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves
var Network = function () {
    
}

Network.prototype.getAll = function(){
      $.get('http://datastore.asadmemon.com/sumair',function(res){
		DATA = res;
        RenderJSON(DATA);    
	});
}

Network.prototype.sendMsg_user1 = function(){
        var takeInput = $('#finput').val();
    
        DATA.push("sumair:"+takeInput);
        console.log(DATA);
        RenderJSON(DATA);
        Network.saveMsg();
        $("#finput").val('');

        newMsgCallback(finalmsg);
}

Network.prototype.sendMsg_user2 = function(){
        var takeSecondInput = $('#sinput').val();

        DATA.push("Asad:"+takeSecondInput);
        RenderJSON(DATA);
        Network.saveMsg();
        $('#sinput').val('');
}

Network.prototype.saveMsg = function(){
     $.ajax({
	    url: 'http://datastore.asadmemon.com/sumair', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}




// The method given below fires when second user presses send button
// Renders data into DATA[] array


// This method sends data to the server and stores it there.
function save(){
   
}

// This method loads data from the server
function load(){

   
}  
