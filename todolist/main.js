 $("#submit").click(function(value){
            var takeInput = $('#input').val();
            $('#container').append("<div id="+takeInput+"><input type='checkbox'/> <label> "+takeInput+"</label><br></div>");
            $("#input").val('');
            $('#'+takeInput).click(function(){
                $('#'+takeInput).remove();
            });
       });
        