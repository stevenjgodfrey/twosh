import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  let value = process.env.API_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: value }),
  };
};

export { handler };
