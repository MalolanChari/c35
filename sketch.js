var game_state = 0;
var player_count = 0;
var form,game,player;
var database ;

function preLoad(){

}

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    
    game = new Game();
    game.get_game_state();
    game.start();
}

function draw(){

}