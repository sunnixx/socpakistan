var ref = firebase.database().ref('/msgs');
ref.on('child_added',function(snapshot){
    $('#container').append("<div>" + snapshot.val()+"</div>");
});

$('#fsubmit').on('click',function(){
    var text = $('#finput').val();
    ref.push("sumair" + ": " + text);
}); 

$('#ssubmit').on('click',function(){
    var text = $('#sinput').val();
    ref.push("asad: " + text);
});