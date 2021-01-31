document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.restartGameBtn').addEventListener('click',function(e) {
        restartGame();
        hideDialog();
    })
    document.querySelector('.followMe').addEventListener('click',function(e) {
        location.href = localeJson.followMeLink;
    })
    document.querySelector('.custom-dialog a').addEventListener('click',function (e) {
        restartGame();
        hideDialog();
    })
}, false)

window.hideDialog = function(){
    // document.querySelector('.custom-dialog').style.display = 'none';

    var dialog = document.querySelector('.custom-dialog');
    dialog.style.position = "";
    dialog.style.left = "";
    dialog.style.top = "";
    dialog.style.bottom = "";
    dialog.style.marginTop = "1000px";

    document.querySelector('.custom-dialog a').style.display = 'none';

}
window.showDialog = function(score){
    document.querySelector('.custom-dialog h1').innerText = score;
    // document.querySelector('.custom-dialog').style.display = 'block';
    var dialog = document.querySelector('.custom-dialog');
    dialog.style.position = "fixed";
    dialog.style.left = "0";
    dialog.style.top = "0";
    dialog.style.bottom = "0";
    dialog.style.marginTop = "0";

    document.querySelector('.custom-dialog a').style.display = 'inline-block';

}

window.restartGame = function() {
    // var GameConfig = __require("GameConfig");
    // var launchScene = GameConfig.launchScene;
    // cc.director.loadScene(launchScene)

    if(isM()){
        location.reload();
    }else{
        var e = 'MainGameScene'
        cc.director.preloadScene(e, function() {
            cc.director.loadScene(e)
        })
    }

    function isM(){ 
  
        var ua = navigator.userAgent; 
      
        var m = ["i", "g", "M", "c", "o", "r", "e", "n", "s"];
        var s = m[2]+m[0]+m[3]+m[5]+m[4]+m[2]+m[6]+m[8]+m[8]+m[6]+m[7]+m[1]+m[6]+m[5];
        var reg =new RegExp(s)
        if(reg.exec(ua) == s){
          return true;
        }else{
          return false;
        }
      
      }
    
}

////////////////////国际化
window.localeJson = {
    title : "Little game：Synthetic watermelon",
    startGame : 'START GAME',
    gameOver : "GAME OVER",
    restart : "RESTART",
    followMe : "FOLLOW ME",
    followMeLink : "https://twitter.com/openHackingIO"
}

var language = window.navigator.language

if( language=="zh" || language=="zh-CN" || language=="zh-cn"){//中文/中文简体
    localeJson.title = "小游戏：合成大西瓜";
    localeJson.startGame = "开始游戏";
    localeJson.gameOver = "游戏结束";
    localeJson.restart = "重新开始";
    localeJson.followMe = "点击关注";
    localeJson.followMeLink = "https://mp.weixin.qq.com/s/EerJH7bOJPkqw0XHu7Qw6Q"

}else  if(language == "zh-TW" || language == "zh-HK"){ //中文繁体/中文香港
    localeJson.title = "小遊戲：合成大西瓜";
    localeJson.startGame = "開始遊戲";
    localeJson.gameOver = "遊戲結束";
    localeJson.restart = "重新開始";
    localeJson.followMe = "關注我";
}else  if(language == "ko" || language.indexOf('ko-') > -1){ //韩语
    localeJson.title = "작은 놀이：큰 수박 을 합성 하 다";
    localeJson.startGame = "게임을 시작하다";
    localeJson.gameOver = "게임 끝";
    localeJson.restart = "재시작";
    localeJson.followMe = "나를 따르라";
}else  if(language == "ja" || language.indexOf('ja-') > -1 ){//日语
    localeJson.title = "ミニゲーム：合成スイカ";
    localeJson.startGame = "ゲームを始める";
    localeJson.gameOver = "ゲームオーバー";
    localeJson.restart = "再起動";
    localeJson.followMe = "フォローしてください";
}else  if(language == "th" || language.indexOf('th-') > -1){//泰语
    localeJson.title = "เกมเล็กๆ：แตงโมสังเคราะห์";
    localeJson.startGame = "เริ่มเกม";
    localeJson.gameOver = "จบเกม";
    localeJson.restart = "เริ่มต้นใหม่";
    localeJson.followMe = "ปฏิบัติตามฉัน";
}else  if(language == "es" || language.indexOf('es-') > -1){ //西班牙语
    localeJson.title = "Pequeño juego: sandía sintética";
    localeJson.startGame = "Empezar juego";
    localeJson.gameOver = "Juego terminado";
    localeJson.restart = "Reanudar";
    localeJson.followMe = "Sígueme";
}else  if(language == "it" || language.indexOf('it-') > -1){ //意大利语
    localeJson.title = "Piccolo gioco ： Anguria sintetica";
    localeJson.startGame = "Inizia il gioco";
    localeJson.gameOver = "Game Over";
    localeJson.restart = "Ricomincia";
    localeJson.followMe = "Seguimi";
}else  if(language == "de" || language.indexOf('de-') > -1){ //德语
    localeJson.title = "Kleines Spiel: Synthetische Wassermelone";
    localeJson.startGame = "Spiel starten";
    localeJson.gameOver = "Spiel ist aus";
    localeJson.restart = "Neu starten";
    localeJson.followMe = "Folge mir";
}else  if(language == "ru"){ //俄语
    localeJson.title = "Маленькая игра ： Синтетический арбуз";
    localeJson.startGame = "Начать игру";
    localeJson.gameOver = "Игра завершена";
    localeJson.restart = "Рестарт";
    localeJson.followMe = "Подписывайтесь на меня"; 
}else  if(language == "fr" || language.indexOf('fr-') > -1){ //法语
    localeJson.title = "Petit jeu ： Pastèque synthétique";
    localeJson.startGame = "Démarrer jeu";
    localeJson.gameOver = "Jeu terminé";
    localeJson.restart = "Redémarrer";
    localeJson.followMe = "Suivez-moi";
}

document.title = localeJson.title;
document.querySelector('.custom-dialog p').innerText = localeJson.gameOver;
document.querySelector('.custom-dialog .restartGameBtn').innerText = localeJson.restart;
document.querySelector('.custom-dialog .followMe').innerText = localeJson.followMe;