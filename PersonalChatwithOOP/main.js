
load();



// This method appends the messages and displays it in the view. 
// This method is also responsible for "Clearing" the chat from Server.
function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           DATA = [];
           save();
        });
    }
}





// This method is responsible for creating intervals, so the page refreshes automatically

$(document).ready(
    function(){
        setInterval(function(){
            $('#container').html(load());
        },1000);
    }
);
