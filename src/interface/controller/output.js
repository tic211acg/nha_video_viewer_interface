nha_video_viewer_interface.RI.storeProperties = function(_myComponent, _parameters)
{
	// function parameters
	var properties = _parameters[0];



	// function implementation
	var interfaceType = 'RI';
	var portName = 'storeProperties';

	var data = [];
		data[0] = properties;
	var dataSchema = null;



	_myComponent.log(_myComponent, [interfaceType + '.' + portName, _parameters]);

	_myComponent.emit(_myComponent, [portName, data, dataSchema]);
}
