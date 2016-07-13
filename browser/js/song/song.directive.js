'use strict'

juke.directive('song', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/song/songlist.html',
    scope: {
      songView: "="
    },
    link: function (scope) {
	  scope.toggle = function (song) {
	  console.log("toggling!")
	    if (song !== PlayerFactory.getCurrentSong()) {
	      PlayerFactory.start(song, scope.artist.songs);
	    } else if ( PlayerFactory.isPlaying() ) {
	      PlayerFactory.pause();
	    } else {
	      PlayerFactory.resume();
	    }
	  };

    }
  }
})

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: { doubleClickAction: '&'
		},
		link: function(scope, elem){
			elem.on('dblclick', function(){
			console.log("doubleclicked")
			scope.doubleClickAction();
			})
		}
	}
});