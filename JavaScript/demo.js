// document.addEventListener('play', function(e){  
//   var audios = document.getElementsByTagName('audio');  
//   for(var i = 0, len = audios.length; i < len;i++){  
//       if(audios[i] != e.target){  
//           audios[i].pause();  
//       }  
//   }  
// }, true);

$('.play').click(function(){ var $this = $(this);

  // starting audio
  var audioID = "sound" + $(this).attr('id');
  
  $this.toggleClass('active');
  if($this.hasClass('active')){
      $this.addClass('pause'); 
      $("#" + audioID).trigger('play');
  } else {
      $this.removeClass('pause');
      $this.addClass('play');
      $("#" + audioID).trigger('pause');
  }
  });
  window.addEventListener("play", function(evt) { if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) { window.$_currentlyPlaying.pause(); } window.$_currentlyPlaying = evt.target; }, true);