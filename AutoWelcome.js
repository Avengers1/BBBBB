//AUTO WELCOME!!!

message = prompt("Message here the username will go at the begin");

API.on(API.USER_JOIN, function(data){

if(message == "Welcome to ♕ Portugal Eletro Music 【PEM】 ♕"){
API.sendChat(" @" + data.username + " Welcome to ♕ Portugal Eletro Music 【PEM】 ♕ ");
} else {
API.sendChat(" @" + data.username + message);

}
});
