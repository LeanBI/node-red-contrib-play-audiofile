module.exports = function(RED) {

    function Play_audio_file(config) {
    	RED.nodes.createNode(this,config);
        var node = this;
        //this.status({fill:"red",shape:"dot",text:"not started"});


        this.on("input",function(msg){
            f=config.filename || msg.filename
            var SoundPlayer = require('soundplayer')
            var player=new SoundPlayer();

              // play with a callback
              player.sound(f, function(){
                node.log('playing ' + f)
              });

              player.on('error', function (error) {
                node.log("unable to play sound : " + f + "\n" + JSON.stringify(error))
              });


        })



    }





    RED.nodes.registerType("play_audio_file",Play_audio_file);
}
