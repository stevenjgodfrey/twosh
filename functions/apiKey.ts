import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  //const value = process.env['apiKey'];
  let value = process.env.API_KEY;

  //const { YOUR_VARIABLE } = process.env;

  //const value = Netlify.env.apiKey;

  //const value = [9, 2, 5];
  console.log(JSON.stringify(value) + " new value");


/*if (value !== undefined) {
  value.forEach ((val, ind) => {
  console.log(val + " val");
  console.log(ind + " ind");
  })
}*/
// Value of MY_IMPORTANT_VARIABLE is ${value}.
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `2d142a66d4msh4e75fad4036a8c1p1fde90jsn1aa0377b2596`}),
  };
};

export { handler };
