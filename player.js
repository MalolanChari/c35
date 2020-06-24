class Player {
    constructor() {

    }
get_player_count(){
    var player_count_ref = database.ref('playerCount');
    player_count_ref.on('value',function(data){
        player_count = data.val();

  })
    
}

upd_player_count(count){
  player_count_ref = database.ref('/') ;
  player_count_ref.update({
      'playerCount': count
  })
}
upd_player_name(name){
    var playerIndex= "player" + player_count;
    console.log(playerIndex)
    //player_name_ref = database.ref('playerIndex');
    //console.log(player_name_ref)
    //player_name_ref.set({
    database.ref(playerIndex).set({  
    'name':name
    })
    
}
}