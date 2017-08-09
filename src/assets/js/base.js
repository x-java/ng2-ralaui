(function () {
  /* 是否全屏 */
  var fullScreenBool = true;
  var docElm = document.documentElement;
  $('body').on('click', '#fullScreen', function () {
    if(fullScreenBool){
      //W3C  
      if (docElm.requestFullscreen) {  
          docElm.requestFullscreen();  
      }
      //FireFox  
      else if (docElm.mozRequestFullScreen) {  
          docElm.mozRequestFullScreen();  
      }
      //Chrome等  
      else if (docElm.webkitRequestFullScreen) {  
          docElm.webkitRequestFullScreen();  
      }
      //IE11
      else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
      fullScreenBool = false;
    }else{
      if (document.exitFullscreen) {  
          document.exitFullscreen();  
      }  
      else if (document.mozCancelFullScreen) {  
          document.mozCancelFullScreen();  
      }  
      else if (document.webkitCancelFullScreen) {  
          document.webkitCancelFullScreen();  
      }
      else if (document.msExitFullscreen) {
            document.msExitFullscreen();
      }
      fullScreenBool = true;
    }
  })

  $('body').on('click', '#navbar', function () {
      if($('.ui-nav').hasClass('active')){
        $('.ui-nav, .ui-header, .ui-container').removeClass('active');
      }else{
        $('.ui-nav, .ui-header, .ui-container').addClass('active');
      }
  })
})()