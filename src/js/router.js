(() => {
	const routes = {},
	defaultRoute = 'home';

	 routes['home'] = {
		url: '#/',
		templateUrl: '../../pages/home.html'
	 };

	//  routes['application'] = {
	// 	url: '#/application',
	// 	templateUrl: '../../pages/applications.html'
	//  };

	$.router
		.setData(routes)
		.setDefault(defaultRoute);

	$.when($.ready)
		.then(() => {
				$.router.run('.builder-content'); // ', application'); 
		})
})();
