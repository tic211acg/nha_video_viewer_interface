nha_video_viewer_interface.log = function(_myComponent, _parameters)
{
	// function parameters
	var operation = _parameters[0];
	var data = _parameters[1];



	// function implementation
	if(_myComponent.dataStore.logging == true)
	{
		console.log('[' + _myComponent.component_alias + ']' + ' ' + '>>' + ' ' + operation + '...' + ' ' + '(' + JSON.stringify(data) + ')');
	}
}



nha_video_viewer_interface.getPropertyValue = function(_myComponent, _parameters)
{
	// function parameters
	var elements = _parameters[0];
	var key = _parameters[1];



	// function implementation
	var index = 0;
	var value = null;



	for(index=0; index<elements.length; index++)
	{
		if(elements[index].propertyID == key)
		{
			value = elements[index].propertyValue;
		}
	}



	return(value);
}



nha_video_viewer_interface.updateUI = function(_myComponent, _parameters)
{
	// function implementation
	var status = null;

	var width = null;
	var height = null;



	status = _myComponent.dataStore.status;
	switch(status)
	{
		case 'idle':
			break;

		case 'initiated':
			width = _myComponent.dataStore.defaultWidth;
			height = _myComponent.dataStore.defaultHeight;
			_myComponent.resizeInitiatedScreen(_myComponent, [width, height]);

			_myComponent.showInitiatedScreen(_myComponent, []);
			break;

		case 'active':
			_myComponent.hideInitiatedScreen(_myComponent, []);

			width = _myComponent.dataStore.width;
			height = _myComponent.dataStore.height;
			_myComponent.resizeActiveScreen(_myComponent, [width, height]);

			_myComponent.showActiveScreen(_myComponent, []);
			break;

		default:
			break;
	}
}



nha_video_viewer_interface.hasUI = function(_myComponent, _parameters)
{
	// function implementation
	var hasUI = null;



	if((_myComponent.dataStore.defaultWidth == 0) && (_myComponent.dataStore.defaultHeight == 0))
	{
		hasUI = false;
	}
	else
	{
		hasUI = true;
	}



	return(hasUI);
}



nha_video_viewer_interface.setStatus = function(_myComponent, _parameters)
{
	// function parameters
	var status = _parameters[0];



	// function implementation
	_myComponent.dataStore.status = status;
}
