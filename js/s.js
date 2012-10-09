(function(app, $, undefined) {
    //private vars
    var imgReady = false;
    
    //public vars
    app.IMG          = "img/bg.jpg";
    app.spinnerClass = "loading";
    app.hideClass    = "hidden";
    app.readyClass   = "ready";

    // private methods
    function onLoadImage() {
      document.body.className = app.readyClass;
      //document.getElementsByClassName(app.spinnerClass)[0].className += " " + app.hideClass;
    }

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
