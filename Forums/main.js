
var currentTopic;
var topicRef = firebase.database().ref('/topics/');
topicRef.on('child_added',function(snapshot){
    // $('#TopicTable tbody').append("<a href='topic.html#key="+snapshot.key+"'id='"+snapshot.key+"'>" + snapshot.val().title + " topic started by " + snapshot.val().username +  "</a> <br>");
      $('#tableid tbody').append("<tr id="+ snapshot.key +"><td>"+snapshot.val().title + "</td><td>" + snapshot.val().username+
      "</td><td>"+ snapshot.val().time +"</td><td id='del"+snapshot.key+"' class='delete glyphicon glyphicon-remove'></tr>");

    $('#'+snapshot.key).on('click',function(){
        window.location = "topic.html#key="+snapshot.key;
    });

    $('#del'+snapshot.key).on('click',function(e){
        e.stopPropagation();
        var delTopic = firebase.database().ref('/topics/'+snapshot.key);
        delTopic.remove();
        $('#'+snapshot.key).remove();
    });
});

$('#submit').on('click',function(){
    var date = new Date();

    var obj = {
        "title" : $('#topic').val(),
        "username" : $('#user').val(),
        "time" : date.getDate() + " " + date.getMonth() + " " + date.getFullYear(),
        "comments" : {

        }
    }

    topicRef.push(obj);
}); 



