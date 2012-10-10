// by @marciobarrios
// It waits till the background image is loaded and then adds the class "ready" to <body>
(function(app, $, undefined) {
    //public vars
    app.IMG          = "img/bg.jpg";
    app.readyClass   = "ready";

    // private methods
    function onLoadImage() { document.body.className = app.readyClass; }

    // public methods
    app.init = function() {
      // preload background image
      var img = new Image();
      img.src = app.IMG;
      img.addEventListener("load", onLoadImage, false);
    };

})(window.app = window.app || {}, document.querySelector);

// init app when dom ready
document.addEventListener("DOMContentLoaded", app.init, false);
