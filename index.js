var omx = require('omx-manager');
var config = require('./config');

omx.enableHangingHandler();

var playFire = function(){
  omx.play(
    config.firevid,
    {
      '--loop': true,
      '-o': 'hdmi',
      '--vol': 0
    }
  ); 
};

playFire();
