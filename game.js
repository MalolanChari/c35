class Game{
    constructor (){

    }

get_game_state(){
    var game_state_ref = database.ref('gameState');
    game_state_ref.on('value',function(data){
        game_state = data.val();
    })
}

upd_game_state(state){
    var  game_state_ref = database.ref('/');
    game_state_ref.update({
        'gameState': state
    })
    }

    start(){
        if(game_state===0){
            player= new Player();
            player.get_player_count();
            form= new Form();
            form.display();
        }
    }
}
