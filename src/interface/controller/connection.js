nha_video_viewer_interface.emit = function(_myComponent, _parameters)
{
	// function parameters
	var portName = _parameters[0];
	var data = _parameters[1];
	var dataSchema = _parameters[2];



	// function implementation
	switch(portName)
	{
		default:
			_myComponent.dataStore.websocket.emit('send', _myComponent.user_id, _myComponent.component_alias, _myComponent.component_instance, portName, data, dataSchema);
			break;
	}
}



nha_video_viewer_interface.onConnect = function(_myComponent, _parameters)
{
	// function implementation
	_myComponent.log(_myComponent, ['connect', _parameters]);

	_myComponent.dataStore.websocket.emit('connectComponent', _myComponent.user_id, _myComponent.component_instance, null);
}



nha_video_viewer_interface.connect = function(_myComponent, _parameters)
{
	// function implementation
	if(_myComponent.nodejs_url != null)
	{
		var eventName = 'connect';
		var event = _myComponent.getEvent(_myComponent, [eventName]);



		_myComponent.dataStore.websocket = io.connect(_myComponent.nodejs_url);



		_myComponent.dataStore.websocket.on('connect', event);

		_myComponent.registerInputs(_myComponent, []);
	}
}



nha_video_viewer_interface.registerInputs = function(_myComponent, _parameters)
{
	// function implementation
	_myComponent.registerEvent(_myComponent, ['setVideo']);
}



nha_video_viewer_interface.registerEvent = function(_myComponent, _parameters)
{
	// function parameters
	var portName = _parameters[0];



	// function implementation
	var eventName = _myComponent.getFullPortName(_myComponent, [portName]);
	var event = _myComponent.getEvent(_myComponent, [portName]);



	_myComponent.dataStore.websocket.on(eventName, event);
}



nha_video_viewer_interface.getEvent = function(_myComponent, _parameters)
{
	// function parameters
	var portName = _parameters[0];



	// function implementation
	switch(portName)
	{
		case 'connect':
			return(function()
			{
				_myComponent['onConnect'](_myComponent, []);
			});
			break;

		default:
			return(function(_parameters)
			{
				var status = null;



				status = _myComponent.dataStore.status;
				switch(status)
				{
					case 'idle':
						break;

					case 'initiated':
						if(portName == 'setProperties')
						{
							_myComponent.PI[portName](_myComponent, _parameters);
						}
						break;

					case 'active':
						_myComponent.PI[portName](_myComponent, _parameters);
						break;

					default:
						break;
				}
			});
			break;
	}
}



nha_video_viewer_interface.getFullPortName = function(_myComponent, _parameters)
{
	// function parameters
	var portName = _parameters[0];



	// function implementation
	var fullPortName = _myComponent.component_instance + ',' + portName;



	return(fullPortName);
}
