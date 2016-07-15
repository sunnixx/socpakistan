var DATA = [];
load();



 $("#fsubmit").click(function(value){
    var takeInput = $('#finput').val();
    
    DATA.push("sumair:"+takeInput);
    console.log(DATA);
    RenderJSON(DATA);
    save();
    $("#finput").val('');
   
});

$("#ssubmit").click(function(value){
    var takeSecondInput = $('#sinput').val();

    DATA.push("Asad:"+takeSecondInput);
    RenderJSON(DATA);
    save();
    $('#sinput').val('');
    
});


function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           DATA = [];
           save();
        });
    }
}

function save(){
    // localStorage.myData = JSON.stringify(DATA);
    $.ajax({
	    url: 'http://datastore.asadmemon.com/sumair', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

function load(){

    $.get('http://datastore.asadmemon.com/sumair',function(res){
		DATA = res;
        RenderJSON(DATA);

    
	});
}  

$(document).ready(
    function(){
        setInterval(function(){
            load();
        },1000);
    });
