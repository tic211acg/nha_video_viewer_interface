nha_video_viewer_interface.PI.setVideo = function(_myComponent, _parameters)
{
	// function parameters
	var source = _parameters[0];
	var base64 = _parameters[1];
	var type = _parameters[2];
	var autoplay = _parameters[3];
	var controls = _parameters[4];



	// function implementation
	var interfaceType = 'PI';
	var portName = 'setVideo';



	_myComponent.log(_myComponent, [interfaceType + '.' + portName, _parameters]);

	_myComponent.manageVideo(_myComponent, [source, base64, type, autoplay, controls]);
}



nha_video_viewer_interface.PI.setProperties = function(_myComponent, _parameters)
{
	// function parameters
	properties = _parameters.GetInstancePropertiesResult.properties;



	// function implementation
	var interfaceType = 'PI';
	var portName = 'setProperties';



	_myComponent.log(_myComponent, [interfaceType + '.' + portName, _parameters]);

	_myComponent.loadProperties(_myComponent, [properties]);
}
