/**
 * Toggle fullscreen function who work with webkit and firefox.
 * @function toggleFullscreen
 * @param {Object} event
 */
function toggleFullscreen(event) {
    var element = document.body;
  
      if (event instanceof HTMLElement) {
          element = event;
      }
  
      var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
  
      element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
      document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
  
      isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();

      // Changes icon of fullscreen button according to fullscreen state
      var fullscreenButton = document.getElementById('fullscreenButton');
      if(isFullscreen){
          fullscreenButton.innerHTML = '<i class="far fa-expand-arrows-alt fa-2x"></i>';
      }else{
          fullscreenButton.innerHTML = '<i class="far fa-compress-arrows-alt fa-2x"></i>';
      }
}