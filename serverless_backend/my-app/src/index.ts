
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
		return Response.json({
			message: "hello there!",
			description: "this is the json file format not a get request",
		});
	},
} satisfies ExportedHandler<Env>;
