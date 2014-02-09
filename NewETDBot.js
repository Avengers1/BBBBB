	

    API.on(API.CHAT,onChat);
    API.on(API.DJ_ADVANCE,onDjAdv);
    API.sendChat('ETD-BOT is ON!');
    var song;
    if (API.getDJs().length == 0) API.on(API.DJ_UPDATE,djUpdate);
    else song = API.getMedia().author + ' - ' + API.getMedia().title;
     
    function onChat(data) {
                    var message = data.message.toLowerCase();
                    song = API.getMedia().author + ' - ' + API.getMedia().title
                    if (message.indexOf('!fechar') == 0) API.moderateRoomProps(true,true);
                    if (message.indexOf('!abrir') == 0) API.moderateRoomProps(false,true);
                    if (message.indexOf('!pular') == 0) API.moderateForceSkip();
                    if (message.indexOf('!sempulo') == 0) {
                            API.moderateRoomProps(true,true);
                            setTimeout(function(){API.moderateForceSkip();},1500);
                            setTimeout(function(){API.moderateRoomProps(false,true);},4000);
                    }
                    if (message.indexOf('!comandos') == 0) API.sendChat('/me !temas !regras !musica !ajuda !fb !gi');
                    if (message.indexOf('!temas') == 0) API.sendChat('/me :warning:  Temas Livres,Dubstep, Electro, Electro-House, House, Progressive House,Drumstep, Drum and Bass, Trance, Trap, Glitch-Hop, Hardstyle');
                    if (message.indexOf('!regras') == 0) API.sendChat('/me  :warning: 1- Não toque musicas repetidas ou pulado,2- Não fique pedindo cargos!, 3- Sem flood no chat, 4º Evite tocar musicas longas / permitido : 6:30 maximo, 5- Não escrever /me /em 6- Respeite os adms da sala, 7- Não toque funk !');
                    if (message.indexOf('!musica') == 0) API.sendChat('/me ' + song);
                    if (message.indexOf('!autor','author') == 0) API.sendChat('/me por User-00700823');
                    if (message.indexOf('!ajuda','help') == 0) API.sendChat('/me  :warning:  Todas as informações podem ser encontradas aqui http://www.treta.com.br/treta-com-br-no-plug-dj');
                    if (message.indexOf('!etd') == 0) API.sendChat('/me Grupo: https://www.facebook.com/groups/ETD.plug/, Twitter: https://twitter.com/ETDBR,Página: https://www.facebook.com/ETDPlugdj');
                    if (message.indexOf('!pita') == 0) API.sendChat('/me :trollface: se pita?');
                    if (message.indexOf('!User007') == 0) API.sendChat('/me menino mais seqsy do plug.dj!');
                    if (message.indexOf('!welcome') == 0) API.sendChat('/me Bem vindos a sala Eletro Trap & Dubstep!');
                    if (message.indexOf('!brutos') == 0) API.sendChat('/me PC com AIDS!');
                    if (message.indexOf('!assis') == 0) API.sendChat('/me noia!');
                    if (message.indexOf('!ipasoca') == 0) API.sendChat('/me Dorgado!');
                    if (message.indexOf('!guilherme') == 0) API.sendChat('/me verme!');
                    if (API.hasPermission(data.fromID,API.ROLE.BOUNCER)) {
                        if (message.indexOf('!stop') == 0) {
                            API.sendChat('ETD-Bot Desligado');
                            API.off(API.CHAT,onChat);
                            API.off(API.DJ_ADVANCE,onDjAdv);
                        }
                    }
    }
     
    function onDjAdv(obj) {
            setTimeout(function(){document.getElementById("button-vote-positive").click();},1500);
            var songStr = song;
            var woots = obj.lastPlay.score.positive, mehs = obj.lastPlay.score.negative, curates = obj.lastPlay.score.curates ;
            if (woots === 1) var ww = '   --    :+1:  ,   '; else var ww = '   --    :+1:  ,   ';
            if (mehs === 1) var mm = '   --    :-1: ,   '; else var mm = '   --    :-1:  ,   ';
            if (curates === 1) var cc = '   --    :star:'; else var cc = '   --    :star:';
            var scoreStr = '   recebeu    ' + woots + ww + mehs + mm + curates + cc;
            API.sendChat('/em  :cd:    ' + songStr '    :cd:   ' + scoreStr ' ');
            song = API.getMedia().author + '  -  ' + API.getMedia().title;
    }
     
    function djUpdate(djs) {
            song = API.getMedia().author + '  -  ' + API.getMedia().title;
            API.off(API.DJ_UPDATE,djUpdate);
    }

