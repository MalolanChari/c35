class Form{
    constructor(){

    }

    display(){
        var title= createElement("h2");
        title.html("CAR RACING 3D! KABOOM!!!");
        title.position(130,10);

        var input = createInput("name");
        input.position(130,160);

        var button=createButton("play");
        button.position(250,200);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            player_count = player_count +1

            player.upd_player_name(name)

            player.upd_player_count(player_count)

            greeting.html(" WELCOME RACER, YOU MUST BE" + name)
            greeting.position(130,160)
        })
    }
}
