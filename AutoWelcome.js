//AUTO WELCOME!!!

message = prompt("Message here the username will go at the begin");

API.on(API.USER_JOIN, function(data){

if(message == ""){
API.sendChat(" @" + data.username + " :Welcome to 'i'm not BR ");
} else {
API.sendChat(" @" + data.username + message);

}
});
