import { Hono } from 'hono'

const app = new Hono()




async function authMiddleware(c: any, next: any) {
    if(c.req.Authorization) {
      //
      next();
    }
    else {
      return c.text("you are not authorized");
    }
}

app.use(authMiddleware);

app.get('/',async (c) => {
  const body = await c.req.json;
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
