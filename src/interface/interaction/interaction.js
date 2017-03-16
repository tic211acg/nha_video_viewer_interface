nha_video_viewer_interface.updateVideo = function(_myComponent, _parameters)
{
	// function parameters
	var source = _parameters[0];
	var base64 = _parameters[1];
	var type = _parameters[2];
	var autoplay = _parameters[3];
	var controls = _parameters[4];



	// function implementation
	var videoViewer = _myComponent.$.videoViewer;
	var sources = videoViewer.getElementsByTagName('source');
	


	videoViewer.autoplay = autoplay;
	videoViewer.controls = controls;
	
	if(base64 == true)
	{
		sources[0].src = 'data:' + type + ';base64,' + source;
	}
	else
	{
		sources[0].src = source;
	}

	sources[0].type = type;
	
	
	
	videoViewer.load();
}



nha_video_viewer_interface.showActiveScreen = function(_myComponent, _parameters)
{
	// function implementation
	var screen = _myComponent.$.activeScreen;



	screen.style.display = 'block';
}



nha_video_viewer_interface.resizeActiveScreen = function(_myComponent, _parameters)
{
	// function parameters
	var width = _parameters[0];
	var height = _parameters[1];



	// function implementation
	var screen = _myComponent.$.activeScreen;



	screen.style.width = width;
	screen.style.height = height;
}



nha_video_viewer_interface.hideActiveScreen = function(_myComponent, _parameters)
{
	// function implementation
	var screen = _myComponent.$.activeScreen;



	screen.style.display = 'none';
}



nha_video_viewer_interface.showInitiatedScreen = function(_myComponent, _parameters)
{
	// function implementation
	var screen = _myComponent.$.initiatedScreen;



	screen.style.display = 'table-cell';
}



nha_video_viewer_interface.resizeInitiatedScreen = function(_myComponent, _parameters)
{
	// function parameters
	var width = _parameters[0];
	var height = _parameters[1];



	// function implementation
	var screen = _myComponent.$.initiatedScreen;



	screen.style.width = width;
	screen.style.height = height;
}



nha_video_viewer_interface.hideInitiatedScreen = function(_myComponent, _parameters)
{
	// function implementation
	var screen = _myComponent.$.initiatedScreen;



	screen.style.display = 'none';
}
