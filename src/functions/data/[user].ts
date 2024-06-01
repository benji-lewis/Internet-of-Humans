import IoHelpers from '../helpers/index';

const helpers = new IoHelpers();

export function onRequestGet(context) {
	const headers = context.request.options.headers;
	const userData = helpers.fetchUserFromDb(context.params.user);
	return new Response(userData);
}