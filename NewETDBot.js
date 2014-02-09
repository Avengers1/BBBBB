//Auto-Woot
var baseUrl = "http://i.imgur.com/";
var wooting = true;
 
function startWooting() {
        stopWooting();
 
        API.on(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
        wootSong();
        var css = document.createElement("style");
        css.type = "text/css";
        css.setAttribute('id', 'autowooter-css');
        css.innerHTML = "#autowooter-button { left: 213px; } .autowooter-icon-on { position: absolute; width: 30px; height: 30px; background: url("+ baseUrl + "9afjx9c.png); } .autowooter-icon-off { position: absolute; width: 30px; height: 30px; background: url("+ baseUrl + "aQ7Xot2.png); }";
        document.body.appendChild(css);
 
        $('#chat-header').append('<div id="autowooter-button" class="chat-header-button"><i class="autowooter-icon autowooter-icon-on"></i></div>');
       
        API.chatLog();
 
        $("#autowooter-button").click(function() {
                if(wooting) {
                        $("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-off"></i>');
                } else {
                        $("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-on"></i>');
                }
                wooting = !wooting;
                wootSong();
        });
}
 
function stopWooting() {
        API.off(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
        wootSong();
        $('#autowooter-js').remove();
        $('#autowooter-css').remove();
        $('#autowooter-button').remove();
}
 
function DJ_ADVANCE_LISTENER(obj) {
        wootSong();
}
 
function wootSong() {
        if(wooting) {
                $("#woot").click();
        }
}
 
startWooting();


//Auto-Chat
API.on(API.CHAT,onChat);
API.on(API.DJ_ADVANCE,onDjAdv);
API.sendChat('ETD-BOT Ligado :v:');
var song;
if (API.getDJs().length == 0) API.on(API.DJ_UPDATE,djUpdate);
else song = API.getMedia().author + ' - ' + API.getMedia().title;

function onChat(data) {
                var message = data.message.toLowerCase();
                song = API.getMedia().author + ' - ' + API.getMedia().title
                if (message.indexOf('!travar') == 0) API.moderateRoomProps(true,true);
                if (message.indexOf('!destravar') == 0) API.moderateRoomProps(false,true);
                if (message.indexOf('!pular') == 0) API.moderateForceSkip();
                if (message.indexOf('!sempulo') == 0) {
                        API.moderateRoomProps(true,true);
                        setTimeout(function(){API.moderateForceSkip();},1500);
                        setTimeout(function(){API.moderateRoomProps(false,true);},4000);
                }
                if (message.indexOf('!desligar') == 0) {
                        API.sendChat('Treta-Bot Desligado');
                        API.off(API.CHAT,onChat);
                        API.off(API.DJ_ADVANCE,onDjAdv);
                }
                if (message.indexOf('!comandos') == 0) API.sendChat('/me  :pushpin:  !temas !regras !musica !ajuda !etd');
                if (message.indexOf('!temas') == 0) API.sendChat('/me :warning:  Temas Livres,Dubstep, Electro, Electro-House, House, Progressive House,Drumstep, Drum and Bass, Trance, Trap, Glitch-Hop, Hardstyle');
                if (message.indexOf('!regras') == 0) API.sendChat(':warning: 1- Não toque musicas repetidas ou pulado,2- Não fique pedindo cargos!, 3- Sem flood no chat, 4º Evite tocar musicas longas / permitido : 6:30 maximo, 5- Não escrever /me /em 6- Respeite os adms da sala, 7- Não toque funk !);
                if (message.indexOf('!musica') == 0) API.sendChat('/me  :pushpin:   ' + song);
                // NÃO REMOVA O AUTOR, isso me ajuda e me motiva a fazer outros bots :)
                if (message.indexOf('!autor') == 0) API.sendChat('/me  :bulb:  Admin-bot by User-00700823');
                if (message.indexOf('!ajuda') == 0) API.sendChat('/me  :pushpin:  Todas as informações podem ser encontradas aqui http://www.treta.com.br/treta-com-br-no-plug-dj');
                if (message.indexOf('!etd') == 0) API.sendChat('/me Grupo: https://www.facebook.com/groups/ETD.plug/, Twitter: https://twitter.com/ETDBR, Página: https://www.facebook.com/ETDPlugdj');
                if (message.indexOf('!lau') == 0) API.sendChat('/me  :heart:  A mais bonita do Plug.dj!');
                if (message.indexOf('!woot') == 0) API.sendChat('/me  :pushpin:  Usuários que não estão votando serão removidos da lista!');
                if (message.indexOf('!ping') == 0) API.sendChat('/me pong!');
                if (message.indexOf('!User007') == 0) API.sendChat('/me menino mais seqsy do plug.dj!');
                if (message.indexOf('!brutos') == 0) API.sendChat('/me PC com AIDS! Joga saporra fora');
                if (message.indexOf('!assis') == 0) API.sendChat('/me Broxa!');
                if (message.indexOf('!ipasoca') == 0) API.sendChat('/me Dorgado!');
                if (message.indexOf('!guilherme') == 0) API.sendChat('/me verme!');
                if (message.indexOf('!jaum') == 0) API.sendChat('/me viadaum!');
}

function onDjAdv(obj) {
        setTimeout(function(){document.getElementById("button-vote-positive").click();},1500);
        var songStr = song;
        var woots = obj.lastPlay.score.positive, mehs = obj.lastPlay.score.negative, curates = obj.lastPlay.score.curates ;
        if (woots === 1) var ww = '   --     :+1:  ,   '; else var ww = '   --     :+1:  ,   ';
        if (mehs === 1) var mm = '   --     :-1: ,   '; else var mm = '   --     :-1:  ,   ';
        if (curates === 1) var cc = '   --     :star:'; else var cc = '   --     :star:';
        var scoreStr = '   recebeu    ' + woots + ww + mehs + mm + curates + cc;
        API.sendChat('  :clapper:    ' + songStr + '  :clapper:    ' + scoreStr);
        song = API.getMedia().author + '  -  ' + API.getMedia().title;
}

function djUpdate(djs) {
        song = API.getMedia().author + '  -  ' + API.getMedia().title;
        API.off(API.DJ_UPDATE,djUpdate);
}
