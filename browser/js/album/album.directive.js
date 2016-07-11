juke.directive('albumList', function(){

	return {
		restrict: 'E', 
		templateUrl: '/js/album/templates/albumList.html',
		scope: {
			albumView: '='
		},

		link: function(scope){
		}

	}
});
