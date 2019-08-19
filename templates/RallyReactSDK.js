class RallyReact {

	singleton = null;
	registeredApps = [];
	
	constructor(config) {
		if (singleton === null) {
			singleton = this;
		}
	}

	getContext() {
		return singleton;
	}

	registerApp(app) {
		var appId = generateUUID();
		registeredApps.push( {
			id: appId,
			app: app
		});
		return appId;
	}

	generateUUID() {
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		)
	}
}

class RallyReactApp {

	constructor(config){
		RallyReact.app = this;
		this.id = Rally.registerApp(this);
	}
}

Rally = new RallyReact();
