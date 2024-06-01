import IoHelpers from "./helpers";

const helpers = new IoHelpers();

function onRequestPost(context) {
	const headers = context.request.options.headers;
	if (context.params.acceptSecret !== 1) return new Response(JSON.stringify({"status": "error", "detail": "You must acknowledge the security caveat."}), {status: 403});
	const newUser = helpers.createUser(context.request.body.data.username, context.request.body.data.secret);
	const userData = {
		username: newUser.username,
		secret: newUser.secret,
	}
	return new Response(JSON.stringify({"status": "success", "detail": userData}));
}
