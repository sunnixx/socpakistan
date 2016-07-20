
var currentTopic;
var topicRef = firebase.database().ref('/topics/');
topicRef.on('child_added',function(snapshot){
    $('#container').append("<a href='topic.html#key="+snapshot.key+"'id='"+snapshot.key+"'>" + snapshot.val().title + " topic started by " + snapshot.val().username +  "</a> <br>");

    $('#'+snapshot.key).on('click',function(){
        currentTopic = snapshot.key;
    });
});

$('#submit').on('click',function(){
    var obj = {
        "title" : $('#topic').val(),
        "username" : $('#user').val(),
        "time" : Date.now(),
        "comments" : {

        }
    }

    topicRef.push(obj);
}); 

