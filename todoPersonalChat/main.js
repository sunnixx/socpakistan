var DATA = [];
load();

 $("#submit").click(function(value){
    var takeInput = $('#input').val();
    
    DATA.push("sumair:"+takeInput);
    console.log(DATA);
    RenderJSON(DATA);
    save();
    $("#input").val('');
});


function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           DATA = [];
           save();
        });
            
        // $('#'+i).click(function(){
        //     var index = $(this).attr("id");
        //     $(this).remove();

        //     //var index = DATA.indexOf(myId);
        //     if(index > -1){
        //         DATA.splice(index,1);
        //         save();
        //     }
        // });
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

    // DATA = JSON.parse(localStorage.myData);
    // RenderJSON(DATA);
    $.get('http://datastore.asadmemon.com/sumair',function(res){
		DATA = res;
        RenderJSON(DATA);

        console.log(res);   
	});
}        
