tdl.require('tdl.webgl');

(function(){
//
var canvas_;
var gl;

var main = function() {
  canvas = document.getElementById("display");
  gl = tdl.webgl.setupWebGL(canvas, {alpha:false});
  if (!gl) {
    return;
  }

  gl.clearColor(0,1,0,1);
  gl.clear(gl_.COLOR_BUFFER_BIT);
};

window.addEventListener('load', main);
}());



