var nick;
$(document).ready(function(){
    nick = window.prompt("Enter Your Nick");
});
var ref = firebase.database().ref('/msgs');
ref.on('child_added',function(snapshot){
    $('#container').append("<div>" + snapshot.val()+"</div>");
});

$('#fsubmit').on('click',function(){
    var text = $('#finput').val();
    ref.push(nick + " : " + text);
    $('#finput').val(' ');
}); 