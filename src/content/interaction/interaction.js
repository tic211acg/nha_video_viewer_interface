nha_video_viewer_interface.manageVideo = function(_myComponent, _parameters)
{
	// function parameters
	var source = _parameters[0];
	var base64 = _parameters[1];
	var type = _parameters[2];
	var autoplay = _parameters[3];
	var controls = _parameters[4];



	// function implementation
	switch(_myComponent.dataStore.mode)
	{
		case 'normal':
			_myComponent.updateVideo(_myComponent, [source, base64, type, autoplay, controls]);
			break;

		case 'emulation':
			_myComponent.updateVideo(_myComponent, [source, base64, type, autoplay, controls]);
			break;

		default:
			break;
	}
}



nha_video_viewer_interface.beforeActivate = function(_myComponent, _parameters)
{
	// function implementation
	switch(_myComponent.dataStore.mode)
	{
		case 'normal':
			// ...
			break;

		case 'emulation':
			// ...
			break;

		default:
			break;
	}

	_myComponent.activate(_myComponent, []);
}



nha_video_viewer_interface.activate = function(_myComponent, _parameters)
{
	// function implementation
	var status = null;

	var hasUI = null;



	status = 'active';
	_myComponent.setStatus(_myComponent, [status]);

	hasUI = _myComponent.hasUI(_myComponent, []);
	if(hasUI == true)
	{
		_myComponent.updateUI(_myComponent, []);
	}
}



nha_video_viewer_interface.beforeInit = function(_myComponent, _parameters)
{
	// function implementation
	var functions = null;
	var index = null;

	var status = null;

	var hasUI = null;



	_myComponent.dataStore = this.dataStore;

	_myComponent.PI = {};
	_myComponent.RI = {};



	functions = Object.getOwnPropertyNames(nha_video_viewer_interface).filter(function(_name)
	{
		var property = nha_video_viewer_interface[_name];
		var isFunction = null;



		if(typeof(property) === 'function')
		{
			isFunction = true;
		}
		else
		{
			isFunction = false;
		}



		return(isFunction);
	});

	for(index=0; index<functions.length; index++)
	{
		_myComponent[functions[index]] = nha_video_viewer_interface[functions[index]];
	}



	functions = Object.getOwnPropertyNames(nha_video_viewer_interface.PI).filter(function(_name)
	{
		var property = nha_video_viewer_interface.PI[_name];
		var isFunction = null;



		if(typeof(property) === 'function')
		{
			isFunction = true;
		}
		else
		{
			isFunction = false;
		}



		return(isFunction);
	});

	for(index=0; index<functions.length; index++)
	{
		_myComponent.PI[functions[index]] = nha_video_viewer_interface.PI[functions[index]];
	}



	functions = Object.getOwnPropertyNames(nha_video_viewer_interface.RI).filter(function(_name)
	{
		var property = nha_video_viewer_interface.RI[_name];
		var isFunction = null;



		if(typeof(property) === 'function')
		{
			isFunction = true;
		}
		else
		{
			isFunction = false;
		}



		return(isFunction);
	});

	for(index=0; index<functions.length; index++)
	{
		_myComponent.RI[functions[index]] = nha_video_viewer_interface.RI[functions[index]];
	}



	_myComponent.dataStore.mode = null;
	_myComponent.dataStore.width = null;
	_myComponent.dataStore.height = null;
}



nha_video_viewer_interface.init = function(_myComponent, _parameters)
{
	// function implementation
	var status = null;

	var hasUI = null;



	status = 'initiated';
	_myComponent.setStatus(_myComponent, [status]);

	hasUI = _myComponent.hasUI(_myComponent, []);
	if(hasUI == true)
	{
		_myComponent.updateUI(_myComponent, []);
	}
}



nha_video_viewer_interface.saveProperties = function(_myComponent, _parameters)
{
	// function implementation
	var properties = [];
		properties[0] = {};
			properties[0].propertyID = 'mode';
			properties[0].propertyValue = _myComponent.dataStore.mode;
		properties[1] = {};
			properties[1].propertyID = 'width';
			properties[1].propertyValue = _myComponent.dataStore.width;
		properties[2] = {};
			properties[2].propertyID = 'height';
			properties[2].propertyValue = _myComponent.dataStore.height;



	_myComponent.RI.getProperties(_myComponent, [properties]);
}



nha_video_viewer_interface.loadProperties = function(_myComponent, _parameters)
{
	// function parameters
	var properties = _parameters[0];



	// function implementation
	_myComponent.dataStore.mode = _myComponent.getPropertyValue(_myComponent, [properties, 'mode']);
	_myComponent.dataStore.width = _myComponent.getPropertyValue(_myComponent, [properties, 'width']);
	_myComponent.dataStore.height = _myComponent.getPropertyValue(_myComponent, [properties, 'height']);



	_myComponent.beforeActivate(_myComponent, []);
}
